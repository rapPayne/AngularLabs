import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom_directives';

  listOfPeople = [
    {
      first: "Sandra",
      last: "Bullock",
      email: "sandra@example.com",
      phone: "555-123-4567",
      birthdate: "July 26, 1964"
    },
    {
      first: "Kanye",
      last: "West",
      email: "kanye@example.com",
      phone: "555-234-5678",
      birthdate: "June 8, 1977"
    },
    {
      first: "Chris",
      last: "Pratt",
      email: "chris@example.com",
      phone: "555-345-6789",
      birthdate: "June 21, 1979"
    },
    {
      first: "Emma",
      last: "Watson",
      email: "emma@example.com",
      phone: "555-456-7890",
      birthdate: "April 15, 1990"
    },
    {
      first: "Leonardo",
      last: "DiCaprio",
      email: "leo@example.com",
      phone: "555-567-8901",
      birthdate: "November 11, 1974"
    },
    {
      first: "Jennifer",
      last: "Lawrence",
      email: "jennifer@example.com",
      phone: "555-678-9012",
      birthdate: "August 15, 1990"
    },
    {
      first: "Tom",
      last: "Hanks",
      email: "tom@example.com",
      phone: "555-789-0123",
      birthdate: "July 9, 1956"
    },
    {
      first: "Natalie",
      last: "Portman",
      email: "natalie@example.com",
      phone: "555-890-1234",
      birthdate: "June 9, 1981"
    },
    {
      first: "Dwayne",
      last: "Johnson",
      email: "dwayne@example.com",
      phone: "555-901-2345",
      birthdate: "May 2, 1972"
    },
    {
      first: "Scarlett",
      last: "Johansson",
      email: "scarlett@example.com",
      phone: "555-012-3456",
      birthdate: "November 22, 1984"
    }
  ];
}
