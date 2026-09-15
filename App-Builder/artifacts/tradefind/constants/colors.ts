/**
 * Semantic design tokens for the mobile app.
 *
 * These tokens mirror the naming conventions used in web artifacts (index.css)
 * so that multi-artifact projects share a cohesive visual identity.
 *
 * Replace the placeholder values below with values that match the project's
 * brand. If a sibling web artifact exists, read its index.css and convert the
 * HSL values to hex so both artifacts use the same palette.
 *
 * To add dark mode, add a `dark` key with the same token names.
 * The useColors() hook will automatically pick it up.
 */

const colors = {
  light: {
    text: '#16201B',
    tint: '#1F8A50',
    background: '#F5F7F4',
    foreground: '#16201B',
    card: '#FFFFFF',
    cardForeground: '#16201B',
    primary: '#1F8A50',
    primaryForeground: '#FFFFFF',
    secondary: '#E9F1EB',
    secondaryForeground: '#245337',
    muted: '#EDF3EE',
    mutedForeground: '#68766D',
    accent: '#D7F2DF',
    accentForeground: '#16663A',
    destructive: '#C94040',
    destructiveForeground: '#FFFFFF',
    border: '#D9E5DB',
    input: '#D9E5DB',
    charcoal: '#15251C',
    amber: '#D7953C',
  },
  dark: {
    text: '#F4FAF5',
    tint: '#65D18D',
    background: '#0E1611',
    foreground: '#F4FAF5',
    card: '#18251D',
    cardForeground: '#F4FAF5',
    primary: '#5BC982',
    primaryForeground: '#092012',
    secondary: '#24372A',
    secondaryForeground: '#D9F5E2',
    muted: '#1C2A21',
    mutedForeground: '#9EAEA3',
    accent: '#193D28',
    accentForeground: '#A8E7BC',
    destructive: '#F17A7A',
    destructiveForeground: '#250909',
    border: '#304237',
    input: '#304237',
    charcoal: '#061009',
    amber: '#E5AE5E',
  },
  radius: 16,
};

export default colors;
