import { htmlSafe } from "@ember/template";
import Component from "@glimmer/component";
import { service } from "@ember/service";
import AnnotationsService from "un-silencing-slavery/services/annotations";

interface InformationPersonCardProfileComponentArgs {
  profile: string;
}

export default class InformationPersonCardProfileComponent extends Component<InformationPersonCardProfileComponentArgs> {
  @service declare annotations: AnnotationsService;

  get htmlProfile() {
    let profile = this.args.profile;

    for (const entry of this.annotations.thesaurus) {
      profile = profile.replaceAll(
        entry.term,
        `<span class="underline decoration-green-100 decoration-2 cursor-pointer thesaurus-term hidden md:inline" 
          aria-describedBy="${entry.slug}-definition">${entry.term}</span>
          <a class="not-prose underline decoration-green-100 decoration-2 cursor-pointer inline md:hidden" href="/glossary#glossary-entry-${entry.slug}">${entry.term}</a>
        `
      );
    }

    return htmlSafe(
      profile
        .split("###")
        .map((paragraph) => `<p>${paragraph}</p>`)
        .join("\n")
    );
  }
}
