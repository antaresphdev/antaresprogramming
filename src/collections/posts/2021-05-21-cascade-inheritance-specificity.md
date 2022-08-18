---
title: "Ang Cascade, Inheritance, at Specificity"
description: Mga nakakalitong concepts ng CSS, at kung paano sila gumagana.
image: 
  src: /assets/images/posts/cascading-inheritance-specificity/cover.png
  color:
    light: 0 0% 100%
    dark: 0 0% 20%
seo_image: /assets/images/posts/cascading-inheritance-specificity/seo-cover.png
author: teacherbuknoy
tags:
  - css
---
Ang cascade ay isang algorithm na ginagamit ng browser para malaman kung paano pagsasama-samahin ang mga style rule mula sa iba't ibang locations. Ito ang mismong core ng CSS, kaya ito tinawag na *Cascading* Style Sheets.

Habang gumagawa ka ng websites, mapapansin mo na may ilang kaso kung saan hindi gumagana ang mga style rules na ginawa mo. Kadalasan na, nangyayari ito dahil may dalawa ka o higit pang style rules na potentially ay puwedeng mag-apply sa element, at dahil dito, nagko-conflict sila. Ginagamit ng browsers ang <b>cascade</b> at ang <b>specificity</b> (isa pang concept na kalapit din ng cascade) para malaman kung aling style rules ang ia-apply nito sa mga element kapag nagkaroon ng conflict. At mahalaga na maintindihan mo kung paano ito gumagana para malaman mo kung bakit minsan ay hindi nangyayari ang gusto mong gawin sa CSS.

Isa pang konsepto na dapat mong malaman ay ang <b>inheritance</b>. Nangyayari ito kapag nai-inherit o namamana ng isang element ang CSS styles na nasa parent element nito. Puwede rin itong maging dahilan ng unexpected na styles sa design mo.

### Ang cascade

Sa madaling sabi, dahil sa cascade, mahalaga na pag-isipan natin ang pagkakasunod-sunod ng ating mga style rules. Kapag gumawa ka ng dalawang style rules na may magkaparehong selectors, halimbawa, ia-apply ng browser ang pinakahuling style na inilagay mo sa CSS dahil sa cascade. Tingnan ang halimbawang ito.

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="maniczirconium" data-slug-hash="bGpOeZy" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Cascade with same specificity">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/bGpOeZy">
  Cascade with same specificity</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Dahil parehong `h1` ang selector ng dalawang style rules na ito, magkakaroon dapat ng conflict sa styles. Pero dahil sa cascade, pinipili ng browser ang huling style rule.

### Ang specificity
Ang specificity ay ang sukat kung gaano ka-specific ang selector ng isang style rule. Ginagamit din ito ng browser para malaman kung aling style ang dapat nitong gamitin kapag nagkaroon conflict. Tingnan natin ang susunod na example:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="maniczirconium" data-slug-hash="dyMwpbe" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Specificity">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/dyMwpbe">
  Specificity</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Sa example na ito, parehas lang na tumutukoy sa iisang element ang `.my-heading` at `h1` selector. Kung susundin ang cascade, magiging `blue` sana ang `color` ng text dahil iyon ang huling nakalagay sa code. Pero ayon sa specificity rules natin, mas specific ang class selector kaysa sa type selector. Bakit?[^1]

[^1]: May mas detalyadong paliwanag sa MDN Docs. Tingnan ang article na <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance" hreflang="en-US"><cite lang="en-US">Cascade and Inheritance</cite></a>.

May order o ranking ang browser para malaman kung aling mga selectors ang mas specific kaysa sa iba. Sa ranking na ito, nasa top 1 ang mga declaration sa `style=""` attribute, kaya ito ang madalas na mag-a-apply sa element kapag may conflict.

1. Styles sa loob ng `style=""` attribute (pinaka-specific)
2. ID selectors (e.g. `#my-id`)
3. Class selectors (e.g. `.my-class`), attribute selectors (e.g. `[type=radio]`), at pseudo-classes (e.g. `:hover`, `:focus`)
4. Type selectors (e.g. `h1`, `p`) (least specific), at pseudo-elements (e.g. `::before`, `::after`)

### Ang `!important`
Sa ilang cases, naglalagay tayo ng declaration sa `style=""` attribute ng HTML tag natin, pero gusto nating i-override iyon sa CSS. Isang way para magawa ito ay ang paggamit ng `!important` declaration. Tingnan ang halimbawang ito.

<p class="codepen" data-height="258" data-theme-id="light" data-default-tab="css,result" data-user="maniczirconium" data-slug-hash="rNePWyK" style="height: 258px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Overriding inline styles with !important">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/rNePWyK">
  Overriding inline styles with !important</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Sa example na ito, nag-set tayo ng `color` sa `style` attribute ng `h1`:

```html
<h1 style="color: red;">This is a red headline</h1>
```

Sa unang rule na inilagay natin sa CSS, sinubukan nating baguhin ang kulay ng text at gawin itong `blue`:

```css
h1 {
  color: blue;
}
```

Pero hindi ito gumagana dahil, ayon sa rules natin ng specificity, mas specific ang mga declaration na nasa loob ng `styles=""` attribute. Kaya para ma-override iyon, gumamit tayo ng `!important` declaration sa pangalawa nating rule:

```css
h1 {
  color: green !important;
}
```

Ngayon, makikita na natin sa browser na in-override nito ang kulay ng text. Naging green na ito, mula sa red na naka-set sa `style=""` attribute.

<div class="callout warning">
  <p><strong>Warning</strong>: Iwasang gamitin ang <code>!important</code>. Binabago nito ang normal na proseso ng cascade, kaya kapag mas marami kang <code>!important</code> sa CSS mo, mas mahihirapan kang gumawa ng styles. Gamitin lang ito kung <em>talagang</em> kinakailangan.</p>
</div>

### Inheritance
May mga CSS declarations naman na naipapasa sa mga descendant ng isang element. Halimbawa, pansinin ang example na ito:
<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="maniczirconium" data-slug-hash="poyYqPM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Inheritance">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/poyYqPM">
  Inheritance</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Sa HTML, mapapansin na sa `p` lang naka-set ang kulay na `crimson`, pero apektado rin ang `strong` sa loob ng `p`. Ito ang tinatawag na inheritance. Hindi ito nangyayari sa lahat ng CSS properties, pero may mga declarations na naipapasa o <i>namamana</i> ng isang element galing sa parent element niya.

### Summary
Ang cascade, inheritance, at specificity ay mga techniques na ginagamit ng browser para malaman kung aling mga styles ang mag-a-apply sa bawat element.

Dahil sa <b>cascade</b>, ina-apply ng browser ang styling na pinakahuling na-declare sa CSS kapag may mga conflict.

Dahil sa <b>specificity</b>, ina-apply ng browser ang stylng na may pinaka <q>specific</q> na selector. Dahil dito, nagkakaroon tayo ng way para ma-override ang mga styles kung kailangan.

Dahil naman sa <b>inheritance</b>, nakukuha ng mga element ang ilang CSS properties galing sa parent element nila.
