export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar?: string;
  rating: number;
  text: string;
}

export interface VideoTestimonial {
  id: string;
  name: string;
  badge: string;
  thumbnail: string;
  videoUrl: string;
}
