import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeState = {
  mode: "light" | "dark";
  toggleMode: (theme: "light" | "dark") => void;
};
export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: "light",
      toggleMode: (theme) => set((state) => ({ mode: theme })),
    }),
    { name: "theme" }
  )
);

type AnimateState = {
  mode: false | true;
  toggleMode: (theme: false | true) => void;
};
// ? This is for delaying the animation of the page after the Curtains closed.
export const useAnimateStore = create<AnimateState>()(
  persist(
    (set) => ({
      mode: false,
      toggleMode: (theme) => set((state) => ({ mode: theme })),
    }),
    { name: "animate" }
  )
);

type NavigationState = {
  willNavigateTo: string;
  setWillNavigateTo: (pathname: string) => void;
};
// ? This is for handling the navigation and also triggers the Curtains of the "willNavigateTo" is not equal to the current "pathname" from useRouter().
export const useNavigationStore = create<NavigationState>()(
  persist(
    (set) => ({
      willNavigateTo: "",
      setWillNavigateTo: (pathname) =>
        set((state) => ({ willNavigateTo: pathname })),
    }),
    { name: "navigator" }
  )
);

type RandomCurtainColorState = {
  randomIndex: 1 | 2;
  setRandomIndex: (number: 1 | 2) => void;
};
// ? This is for random text and background colors of the Curtains.
export const useRandomCurtainColor = create<RandomCurtainColorState>()(
  persist(
    (set) => ({
      randomIndex: Math.random() < 0.5 ? 1 : 2,
      setRandomIndex: (number) => set((state) => ({ randomIndex: number })),
    }),
    { name: "radomized-curtain" }
  )
);

type MusicStore = {
  showPlayer: true | false;
  playMusic: true | false;
  setShowPlayer: (status: true | false) => void;
  setPlayMusic: (status: true | false) => void;
};

export const useMusicStore = create<MusicStore>()(
  persist(
    (set) => ({
      showPlayer: false,
      playMusic: false,
      setShowPlayer: (status) => set((state) => ({ showPlayer: status })),
      setPlayMusic: (status) => set((state) => ({ playMusic: status })),
    }),
    { name: "music-status" }
  )
);
