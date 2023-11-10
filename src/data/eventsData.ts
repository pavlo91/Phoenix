import img1 from 'assets/phoenix/img/gallery/19.jpg';
import img2 from 'assets/phoenix/img/gallery/20.jpg';
import img3 from 'assets/phoenix/img/gallery/21.jpg';

export interface Event {
  id: number;
  date: string;
  title: string;
  organization: string;
  people: number;
  time: string;
  place: string;
}

export const events: Event[] = [
  {
    id: 1,
    date: 'MON, FEB 21- MARCH 23',
    title: 'Master Class on FILM Studies THESIS on Makers',
    organization: 'IAFM- International Academy of Film and Media',
    people: 64,
    time: '12.30PM - 10PM',
    place: 'Tavern on the Greend, New York'
  },
  {
    id: 2,
    date: 'MON, FEB 21- MARCH 23',
    title: "Master Class on FILM Studies 'ANALYSIS of Cinema'",
    organization: 'IAFM- International Academy of Film and Media',
    people: 64,
    time: '12.30PM - 10PM',
    place: 'Tavern on the Greend, New York'
  },
  {
    id: 3,
    date: 'MON, FEB 21- MARCH 23',
    title: 'Witnessing History in Making Photographs',
    organization: 'IAFM- International Academy of Film and Media',
    people: 64,
    time: '12.30PM - 10PM',
    place: 'Tavern on the Greend, New York'
  }
];

export const SingerPhotos = [img1, img2, img3];
