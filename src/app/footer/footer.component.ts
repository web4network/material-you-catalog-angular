import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterConfig {
  content: string;
  channel_links: {
    label: string;
    aria_label: string | null;
    href: string;
    open_new_window: boolean;
  }[];
  library_links: {
    label: string;
    aria_label: string | null;
    href: string;
    open_new_window: boolean;
  }[];
  bottom_links: {
    label: string;
    aria_label: string | null;
    href: string;
    open_new_window: boolean;
  }[];
}
const CONFIG: FooterConfig = {
  content: "Material Design is an adaptable system of guidelines, components, and tools that support the best practices of user interface design. Backed by open-source code, Material Design streamlines collaboration between designers and developers, and helps teams quickly build beautiful products.",
  channel_links: [{
    label: "GitHub",
    aria_label: "Find us on Github",
    href: "https://www.github.com/material-components",
    open_new_window: !0
  }, {
    label: "Twitter",
    aria_label: "Find us on Twitter",
    href: "https://www.twitter.com/materialdesign",
    open_new_window: !0
  }, {
    label: "YouTube",
    aria_label: "Find us on Youtube",
    href: "https://www.youtube.com/materialdesign",
    open_new_window: !0
  }, {
    label: "Blog RSS",
    aria_label: null,
    href: "https://material.io/feed.xml",
    open_new_window: !0
  }
  ],
  library_links: [{
    label: "Android",
    aria_label: "Android",
    href: "/develop/android/mdc-android",
    open_new_window: !1
  }, {
    label: "Compose",
    aria_label: "Compose",
    href: "/develop/android/jetpack-compose",
    open_new_window: !1
  }, {
    label: "Flutter",
    aria_label: "Flutter",
    href: "/develop/flutter",
    open_new_window: !1
  }, {
    label: "Web",
    aria_label: "web",
    href: "/develop/web",
    open_new_window: !1
  }
  ],
  bottom_links: [{
    label: "Privacy Policy",
    aria_label: null,
    href: "https://policies.google.com/privacy",
    open_new_window: !1
  }, {
    label: "Terms of Service",
    aria_label: null,
    href: "https://policies.google.com/terms",
    open_new_window: !1
  }, {
    label: "Join research studies",
    aria_label: null,
    href: "https://google.qualtrics.com/jfe/form/SV_3NMIMtX0F2zkakR?utm_source=Website&Q_Language=en&utm_campaign=Q2&campaignDate=June2022&referral_code=UXRgbtM2422655&productTag=b2d",
    open_new_window: !1
  }
  ]
};

@Component({
  selector: 'mio-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  config: FooterConfig;

  constructor() {
    this.config = CONFIG;
    this.launchFeedback=function() {  }

   }

 

  setFocus() {
    document.dispatchEvent(new CustomEvent("setFocus"))
    // console.error('Method not implemented.');
  }
  launchFeedback() {
    // console.error('Method not implemented.');
  }

}
