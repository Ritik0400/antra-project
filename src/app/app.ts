import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';

import { Album } from './models/album.model';
import { ItunesService } from './services/itunes.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly itunesService = inject(ItunesService);
  private readonly changeDetector = inject(ChangeDetectorRef);

  protected readonly title = signal('antra-project');

  searchTerm = '';
  searchedArtist = '';
  albums: Album[] = [];
  isLoading = false;
  errorMessage = '';
  hasSearched = false;

  onSearch(event?: Event): void {
    event?.preventDefault();
    event?.stopPropagation();

    const trimmedArtist = this.searchTerm.trim();

    if (!trimmedArtist) {
      this.albums = [];
      this.searchedArtist = '';
      this.errorMessage = 'Please enter an artist name.';
      this.hasSearched = false;
      this.isLoading = false;
      this.changeDetector.detectChanges();
      return;
    }

    this.searchedArtist = trimmedArtist;
    this.hasSearched = true;
    this.isLoading = true;
    this.errorMessage = '';

    this.itunesService.searchAlbums(trimmedArtist).subscribe({
      next: (response) => {
        this.albums = response.results;
        this.isLoading = false;
        this.changeDetector.detectChanges();
      },
      error: () => {
        this.albums = [];
        this.errorMessage = 'Unable to load albums. Please try again.';
        this.isLoading = false;
        this.changeDetector.detectChanges();
      },
    });
  }
}
