import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ItunesSearchResponse } from '../models/album.model';

@Injectable({
  providedIn: 'root',
})
export class ItunesService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://itunes.apple.com/search';

  searchAlbums(artistName: string): Observable<ItunesSearchResponse> {
    const encodedArtistName = encodeURIComponent(artistName);
    const url = `${this.apiUrl}?media=music&entity=album&attribute=artistTerm&limit=50&term=${encodedArtistName}`;

    return this.http.get<ItunesSearchResponse>(url);
  }
}
