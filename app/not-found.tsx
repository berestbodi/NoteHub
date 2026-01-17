import type { Metadata } from "next";
import css from "./home.module.css";

export const metadata: Metadata = {
  title: "404 - Page Not Found | NoteHub",
  description: "The page you are looking for does not exist or has been moved.",
  openGraph: {
    title: "404 - Page Not Found | NoteHub",
    description:
      "Oops! It seems you've followed a broken link. This page doesn't exist.",
    url: "https://08-zustand-six-iota.vercel.app/404",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        alt: "NoteHub - Page Not Found",
      },
    ],
    type: "website",
  },
};

export default function NotFound() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
