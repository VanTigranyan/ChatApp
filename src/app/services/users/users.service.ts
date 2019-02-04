import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users = [
    {
      'id' : 1,
      'name': 'Harry',
      'surname': 'Potter',
      'avatarLink': 'https://knysnaloginnhotel.files.wordpress.com/2015/05/harry-potter-1.jpg',
      'is_online': true,
    },
    {
      'id' : 2,
      'name': 'Ron',
      'surname': 'Weasley',
      'avatarlink': 'https://cdn.newsapi.com.au/image/v1/a1ce40d4e151a627def7b68212044ca2',
      'is_online': true,
    },
    {
      'id' : 3,
      'name': 'Hermione',
      'surname': 'Granger',
      'avatarlink': 'http://static.hogwartsishere.com/media/profile_photos/110910-Hermione-2-400_0.jpg',
      'is_online': false,
    }
  ];

  private conversations = [
      {
        'id': 2121212,
        'users': [1, 2],
        'messages': [
          {
            'from': 2,
            'date': '2019-01-28T12:40:36.129Z',
            'text': 'Hello Dude!!!'
          },
          {
            'from': 1,
            'date': '2019-02-28T12:40:36.129Z',
            'text': 'Hope you\'re doing well!!!'
          }
        ]
      },
      {
        'id': 1312312,
        'users': [1, 3],
        'messages': [
          {
            'from': 3,
            'date': '2019-01-30T13:03:37.313Z',
            'text': 'Harry we should read the book I\'ve told you!!!'
          },
          {
            'from': 1,
            'date': '2019-01-30T13:03:37.313Z',
            'text': 'Hermione you know that I don\'t really like reading!!!'
          },
          {
            'from': 3,
            'date': '2019-01-30T13:03:37.313Z',
            'text': 'Harry, we must!'
          }
        ]
      }
  ];

  public getUser(id: number): Observable<object> {
    return of(this.users.find(item => item.id === id));
  }

  public getConversations(userId: number) {
    const conv = this.conversations.filter(item => item.users.indexOf(userId) >= 0);
    return conv.map(c => {
      const from = c.users.find(f => f !== userId);
      const u = this.users.find(us => us.id === from);
      return { conversation: c, user: u };
    });
  }

}
