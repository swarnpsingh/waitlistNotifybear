import React from 'react';
import { Calendar, Landmark, MessageCircle } from 'lucide-react';

/* Brand marks adapted from the 21st.dev floating-icons hero demo,
   plus lucide-based marks for sources without a bundled logo. */

export const IconGoogle = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.9999 12.24C21.9999 11.4933 21.9333 10.76 21.8066 10.0533H12.3333V14.16H17.9533C17.7333 15.3467 17.0133 16.3733 15.9666 17.08V19.68H19.5266C21.1933 18.16 21.9999 15.4533 21.9999 12.24Z" fill="#4285F4"/>
    <path d="M12.3333 22C15.2333 22 17.6866 21.0533 19.5266 19.68L15.9666 17.08C15.0199 17.7333 13.7933 18.16 12.3333 18.16C9.52659 18.16 7.14659 16.28 6.27992 13.84H2.59326V16.5133C4.38659 20.0267 8.05992 22 12.3333 22Z" fill="#34A853"/>
    <path d="M6.2799 13.84C6.07324 13.2267 5.9599 12.58 5.9599 11.92C5.9599 11.26 6.07324 10.6133 6.2799 10L2.59326 7.32667C1.86659 8.78667 1.45326 10.32 1.45326 11.92C1.45326 13.52 1.86659 15.0533 2.59326 16.5133L6.2799 13.84Z" fill="#FBBC05"/>
    <path d="M12.3333 5.68C13.8933 5.68 15.3133 6.22667 16.3866 7.24L19.6 4.02667C17.68 2.29333 15.2266 1.33333 12.3333 1.33333C8.05992 1.33333 4.38659 3.97333 2.59326 7.32667L6.27992 10C7.14659 7.56 9.52659 5.68 12.3333 5.68Z" fill="#EA4335"/>
  </svg>
);

export const IconSlack = (props) => (
  // Tight viewBox: the artwork only spans the middle of the 24-unit canvas
  <svg {...props} viewBox="4.75 5.5 14.5 14.5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#36C5F0"/><path d="M9 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#2EB67D"/><path d="M14 8.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" fill="#ECB22E"/><path d="M15.5 15a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" fill="#E01E5A"/><path d="M10 14h4v-1.5a1.5 1.5 0 0 0-1.5-1.5h-1a1.5 1.5 0 0 0-1.5 1.5V14Z" fill="#E01E5A"/><path d="M8.5 14a1.5 1.5 0 0 0 1.5 1.5h1.5v-1a1.5 1.5 0 0 0-1.5-1.5H8.5v1Z" fill="#ECB22E"/><path d="M15.5 10a1.5 1.5 0 0 0-1.5-1.5H12.5v4a1.5 1.5 0 0 0 1.5 1.5h1.5v-4Z" fill="#36C5F0"/><path d="M14 8.5a1.5 1.5 0 0 0-1.5-1.5h-1v4a1.5 1.5 0 0 0 1.5 1.5h1v-4Z" fill="#2EB67D"/>
  </svg>
);

export const IconGitHub = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="#16294F" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export const IconDiscord = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.482a1.88 1.88 0 0 0-1.635-.482C17.398 3.42 16.02 3 12 3s-5.398.42-6.682 1.001a1.88 1.88 0 0 0-1.635.483c-1.875 1.2-2.325 3.61-1.568 5.711 1.62 4.47 5.063 7.8 9.885 7.8s8.265-3.33 9.885-7.8c.757-2.1-.307-4.51-1.568-5.711ZM8.45 13.4c-.825 0-1.5-.75-1.5-1.65s.675-1.65 1.5-1.65c.825 0 1.5.75 1.5 1.65s-.675 1.65-1.5 1.65Zm7.1 0c-.825 0-1.5-.75-1.5-1.65s.675-1.65 1.5-1.65c.825 0 1.5.75 1.5 1.65s-.675 1.65-1.5 1.65Z" fill="#5865F2"/>
  </svg>
);

export const IconX = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="#16294F" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zM17.03 19.75h1.866L7.156 4.25H5.16l11.874 15.5z"/>
  </svg>
);

export const IconSpotify = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.125 14.175c-.188.3-.563.413-.863.225-2.437-1.5-5.5-1.725-9.15-1.012-.338.088-.675-.15-.763-.488-.088-.337.15-.675.488-.762 3.937-.787 7.287-.525 9.975 1.125.3.187.412.562.225.862zm.9-2.7c-.225.363-.675.488-1.037.263-2.7-1.65-6.825-2.1-9.975-1.162-.413.113-.825-.15-1-.562-.15-.413.15-.825.563-1 .362-.112 3.487-.975 6.6 1.312.362.225.487.675.262 1.038v.112zm.113-2.887c-3.225-1.875-8.55-2.025-11.512-1.125-.487.15-.975-.15-1.125-.637-.15-.488.15-.975.638-1.125 3.337-.975 9.15-.787 12.825 1.312.45.263.6.825.337 1.275-.263.45-.825.6-1.275.337v-.038z" fill="#1DB954"/>
  </svg>
);

export const IconDropbox = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8l-6 4 6 4 6-4-6-4z" fill="#0061FF"/><path d="M6 12l6 4 6-4-6-4-6 4z" fill="#007BFF"/><path d="M12 16l6-4-6-4-6 4 6 4z" fill="#4DA3FF"/><path d="M18 12l-6-4-6 4 6 4 6-4z" fill="#0061FF"/>
  </svg>
);

export const IconTwitch = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.149 0L.707 3.028v17.944h5.66v3.028h3.028l3.028-3.028h4.243l7.07-7.07V0H2.15zm19.799 13.434l-3.535 3.535h-4.95l-3.029 3.029v-3.03H5.14V1.414h16.808v12.02z" fill="#9146FF"/><path d="M15.53 5.303h2.12v6.36h-2.12v-6.36zm-4.95 0h2.12v6.36h-2.12v-6.36z" fill="#9146FF"/>
  </svg>
);

export const IconFigma = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2z" fill="#2C2C2C"/>
    <path d="M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5V7z" fill="#0ACF83"/>
    <path d="M12 12a5 5 0 0 1-5-5 5 5 0 0 1 5-5v10z" fill="#A259FF"/>
    <path d="M12 17a5 5 0 0 1-5-5h10a5 5 0 0 1-5 5z" fill="#F24E1E"/>
    <path d="M7 12a5 5 0 0 1 5 5v-5H7z" fill="#FF7262"/>
  </svg>
);

export const IconYouTube = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.582 6.186A2.482 2.482 0 0 0 19.82 4.42C18.1 4 12 4 12 4s-6.1 0-7.82.42c-.98.26-1.74.98-1.762 1.766C2 7.94 2 12 2 12s0 4.06.418 5.814c.022.786.782 1.506 1.762 1.766C6.1 20 12 20 12 20s6.1 0 7.82-.42c.98-.26 1.74-.98 1.762-1.766C22 16.06 22 12 22 12s0-4.06-.418-5.814zM9.75 15.5V8.5L15.75 12 9.75 15.5z" fill="#FF0000"/>
  </svg>
);

export const IconLinkedIn = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

export const IconCalendarApp = (props) => <Calendar {...props} color="#2F5FD6" strokeWidth={2} />;
export const IconBank = (props) => <Landmark {...props} color="#1f9d63" strokeWidth={2} />;
export const IconChat = (props) => <MessageCircle {...props} color="#25D366" strokeWidth={2} />;

/* ── Hero choreography data ─────────────────────────────────────────
   scatter: {x, y} are fractions of viewport width/height from center,
   r is the messy tilt in degrees. `kept` icons survive the declutter
   and settle into slot `slot` of the dock; the rest fade out.
   `order` staggers the animation. */

export const KEPT_COUNT = 6;

export const HERO_ICONS = [
  // What matters — settles into the dock
  { id: 'calendar', Icon: IconCalendarApp, kept: true, slot: 0, order: 0, badge: 1, scatter: { x: -0.43, y: -0.16, r: -8 } },
  { id: 'chat', Icon: IconChat, kept: true, slot: 1, order: 1, badge: 5, scatter: { x: -0.27, y: 0.24, r: 10 } },
  { id: 'bank', Icon: IconBank, kept: true, slot: 2, order: 2, badge: 1, scatter: { x: 0.43, y: -0.18, r: 7 } },
  { id: 'google', Icon: IconGoogle, kept: true, slot: 3, order: 3, badge: 8, scatter: { x: 0.3, y: 0.24, r: -12 } },
  { id: 'slack', Icon: IconSlack, kept: true, slot: 4, order: 4, badge: 6, scatter: { x: -0.12, y: 0.37, r: 9 } },
  { id: 'linkedin', Icon: IconLinkedIn, kept: true, slot: 5, order: 5, badge: 2, scatter: { x: 0.13, y: 0.38, r: -6 } },
  // Noise — filtered out on scroll
  { id: 'youtube', Icon: IconYouTube, kept: false, order: 0, badge: 3, scatter: { x: -0.39, y: -0.34, r: -12 } },
  { id: 'x', Icon: IconX, kept: false, order: 1, badge: 9, scatter: { x: 0.38, y: -0.36, r: 10 } },
  { id: 'spotify', Icon: IconSpotify, kept: false, order: 2, badge: 1, scatter: { x: -0.45, y: 0.12, r: 8 } },
  { id: 'discord', Icon: IconDiscord, kept: false, order: 3, badge: 12, scatter: { x: 0.45, y: 0.08, r: -9 } },
  { id: 'twitch', Icon: IconTwitch, kept: false, order: 4, badge: 2, scatter: { x: -0.36, y: 0.34, r: 14 }, mobileHidden: true },
  { id: 'dropbox', Icon: IconDropbox, kept: false, order: 5, badge: 1, scatter: { x: 0.37, y: 0.33, r: -7 }, mobileHidden: true },
  { id: 'figma', Icon: IconFigma, kept: false, order: 6, badge: 4, scatter: { x: -0.2, y: -0.38, r: 6 }, mobileHidden: true },
  { id: 'github', Icon: IconGitHub, kept: false, order: 7, badge: 2, scatter: { x: 0.19, y: -0.4, r: -11 }, mobileHidden: true },
];
