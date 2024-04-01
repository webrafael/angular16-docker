import { inject } from "@angular/core";
import { Meta, MetaDefinition, Title } from "@angular/platform-browser";


export abstract class PageTemplate {

  protected title: string = '';
  protected description?: string;
  protected metas?: MetaDefinition[];

  private _metaService: Meta = inject(Meta);
  private _titleService: Title = inject(Title);

  setTitle(value: string) {
    this.title = value;

    return this;
  }

  setDescription(value: string) {
    this.description = value;

    return this;
  }

  setMetas(value: MetaDefinition[]) {
    this.metas = value;

    return this;
  }

  protected make() {
    if (this.title) {
      this._titleService.setTitle(this.title);
      this._metaService.addTag({ name: 'og:title', content: this.title });
    }

    if (this.description) {
      this._metaService.addTag({ name: 'description', content: this.description });
      this._metaService.addTag({ name: 'og:description', content: this.description });
    }

    if (this.metas) {
      this._metaService.addTags(this.metas);
    }
  }
}
