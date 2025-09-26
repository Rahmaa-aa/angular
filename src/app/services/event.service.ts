import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private EVENTS: Event[] = [
    {
      id: 1,
      titre: "Concert Jazz",
      description: "Un concert exceptionnel avec des artistes internationaux.",
      date: new Date("2025-10-15T20:00:00"),
      lieu: "Théâtre Municipal",
      prix: 50,
      organisateurId: 101,
      imageUrl: "assets/images/jazz.jpg",
      nbPlaces: 200,
      nbrLikes: 35
    },
    {
      id: 2,
      titre: "Conférence Tech IA",
      description: "Discussion autour des dernières tendances en intelligence artificielle.",
      date: new Date("2025-11-02T09:00:00"),
      lieu: "Centre de Congrès",
      prix: 0, // gratuit
      organisateurId: 102,
      imageUrl: "assets/images/ai_conf.jpg",
      nbPlaces: 500,
      nbrLikes: 120
    },
    {
      id: 3,
      titre: "Atelier Cuisine",
      description: "Apprenez à préparer des plats traditionnels tunisiens.",
      date: new Date("2025-12-05T14:30:00"),
      lieu: "Espace Culturel",
      prix: 25,
      organisateurId: 103,
      imageUrl: "assets/images/cuisine.jpg",
      nbPlaces: 30,
      nbrLikes: 48
    },
    {
      id: 4,
      titre: "Marathon Carthage",
      description: "Une course sportive à travers les sites historiques.",
      date: new Date("2026-01-20T07:00:00"),
      lieu: "Carthage",
      prix: 10,
      organisateurId: 104,
      imageUrl: "assets/images/marathon.jpg",
      nbPlaces: 1000,
      nbrLikes: 300
    }
  ];

  constructor() { }

  // Get all events
  getEvents(): Event[] {
    return this.EVENTS;
  }

  // Get event by ID
  getEventById(id: number): Event | undefined {
    return this.EVENTS.find(event => event.id === id);
  }

  // Add new event
  addEvent(event: Event): void {
    this.EVENTS.push(event);
  }

  // Update event
  updateEvent(updatedEvent: Event): void {
    const index = this.EVENTS.findIndex(event => event.id === updatedEvent.id);
    if (index !== -1) {
      this.EVENTS[index] = updatedEvent;
    }
  }

  // Delete event
  deleteEvent(id: number): void {
    this.EVENTS = this.EVENTS.filter(event => event.id !== id);
  }
}