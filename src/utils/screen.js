const MEDIUM_SCREEN_SIZE = 768;

export default function isMediumScreen() {
    return window.screen.width >= MEDIUM_SCREEN_SIZE ? true : false;
}