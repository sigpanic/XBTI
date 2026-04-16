import type { TestConfig } from '../protocol/types';

export class ThemeManager {
  private themes: Map<string, TestConfig> = new Map();
  private activeThemeId: string | null = null;

  registerTheme(theme: TestConfig) {
    this.themes.set(theme.id, theme);
  }

  getTheme(themeId: string): TestConfig | undefined {
    return this.themes.get(themeId);
  }

  getAllThemes(): TestConfig[] {
    return Array.from(this.themes.values());
  }

  setActiveTheme(themeId: string): boolean {
    if (this.themes.has(themeId)) {
      this.activeThemeId = themeId;
      return true;
    }
    return false;
  }

  getActiveTheme(): TestConfig | null {
    if (!this.activeThemeId) return null;
    return this.themes.get(this.activeThemeId) || null;
  }

  getActiveThemeId(): string | null {
    return this.activeThemeId;
  }
}

export const themeManager = new ThemeManager();
