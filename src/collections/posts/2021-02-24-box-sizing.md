---
title: "Ang Box Sizing ng CSS"
description: Pag-usapan natin kung paano nakaka-influence sa layout ang box sizing
image: 
  src: /assets/images/posts/box-sizing/cover.png
  color:
    light: 35 100% 80%
    dark:  35 100% 20%
seo_image: /assets/images/posts/box-sizing/seo-cover.png
author: teacherbuknoy
tags:
  - css
  - layout
---

Isa sa mga fundamental concepts ng CSS na dapat nating tandaan ay ang box model: **lahat sa CSS ay box**. Anuman ang hitsura ng isang element visually, box pa rin ito para sa CSS.

<figure class="full-bleed">
    <img
        sizes="(max-width: 1980px) 100vw, 1980px"
        srcset="
            /assets/images/posts/box-sizing/box-model_ccrq57_c_scale,w_350.png 350w,
            /assets/images/posts/box-sizing/box-model_ccrq57_c_scale,w_1980.png 1980w"
        src="/assets/images/posts/box-sizing/box-model_ccrq57_c_scale,w_1980.png"
        alt="dalawang HTML div element, parehas na may border-radius. 32px ang isa, at 100% naman ang isa.">
    <figcaption>Kahit may <code>border-radius</code> ang dalawang <code>div</code> elements na ito, itinuturing pa rin silang box ng CSS</figcaption>
</figure>

Mahalaga na tandaan ang konseptong ito sa CSS. Pero mas mahalagang maintindihan kung paano kino-compute ng browser ang magiging size ng mga box na ito at kung paano sila nakikipag-interact sa isa't isa.

## Ang `content-box`

By default sa box model, kapag sinet mo ang `height` at `width` ng isang element, mag-a-apply lang ito sa mismong content ng element. Pagkatapos, kung may naka-set ka ring padding at border, saka ito idadagdag sa overall width at height ng element. Ito ang `box-sizing: content-box;`.

<figure class="full-bleed">
    <img
        sizes="(max-width: 1980px) 100vw, 1980px"
        srcset="
            /assets/images/posts/box-sizing/content-box_eqjop3_c_scale,w_350.png 350w,
            /assets/images/posts/box-sizing/content-box_eqjop3_c_scale,w_1433.png 1433w,
            /assets/images/posts/box-sizing/content-box_eqjop3_c_scale,w_1980.png 1980w"
        src="/assets/images/posts/box-sizing/content-box_eqjop3_c_scale,w_1980.png" 
        alt="isang HTML div element na may width na 500px,  height na 200px, padding na 48px, at border na 5px.">
    <figcaption>Dahil sa default na <code>box-sizing: content-box</code>, iba ang actual na width at height kaysa sa naka-set na <code>width</code> at <code>height</code> sa stylesheet.</figcaption>
</figure>

Puwedeng magkaroon ng unexpected effects ang ganitong behavior. Pansinin ang susunod na example. Isa ito sa mga madalas nating gamitin sa layout ng webpages. Madalas tayong mag-set ng `width: 100%;` sa mga elements para sakupin nila ang available space sa loob ng parent nila.

```css
.child {
  width: 100%;
  border: solid #5b6dcd 10px;
  padding: 25px;
}
```

<p class="codepen" data-height="350" data-theme-id="dark" data-default-tab="result" data-user="maniczirconium" data-slug-hash="oNYoamZ" style="height: 350px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Box-sizing: Content-box">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/oNYoamZ">
  Box-sizing: Content-box</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Dahil sa content box sizing, lumalampas sa width ng parent container ang actual width ng child container. Ang actual width na kasi ng child element ay (100% ng parent width + `25px padding-left` + `25px padding-right` + `10px border-left` + `10px border-right`).

## `border-box` to the rescue!

Para ma-solve ito, kailangan lang nating i-set ang `box-sizing` ng element into `border-box`. Kapag naka-`border-box` ang `box-sizing` ng isang element, magbabago ang way kung paano kino-compute ng browser ang width. Ngayon, kasama na sa `width` at `height` ang padding at border ng element. Kahit gaano pa kalaki ang padding at border mo, hindi nito maapektuhan ang `width` at `height` na sinet mo dahil automatic na ina-adjust ng browser ang width ng content.

```css/4
.child {
  width: 100%;
  border: solid #5B6DCD 10px;
  padding: 25px;
  box-sizing: border-box;
}
```

<p class="codepen" data-height="445" data-theme-id="dark" data-default-tab="result" data-user="maniczirconium" data-slug-hash="MWbOxBe" style="height: 445px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Box-sizing: Content-box">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/MWbOxBe">
  Box-sizing: Content-box</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Sa example na ito, dahil sa `box-sizing: border-box`, gumagana na as expected ang layout natin. Sa halip kasi na sa box ng content i-apply ng browser ang `width` at `height`, ina-apply na ito sa box ng border (kaya siya tinawag na `border-box`).

Ito actually ang makikita sa maraming <i>reset stylesheets</i>[^1] gaya ng [Normalize](https://necolas.github.io/normalize.css/). Sa halip na hayaan ang default styling (`box-sizing: content-box`), nire-reset ng mga stylesheet na ito ang `box-sizing` at ginagawa itong `border-box`. Kaya naman makikita natin ang code na ito sa maraming stylesheets:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

## Bakit hindi `border-box` ang default?

Kung mas maganda ang `border-box`, bakit hindi na lang ito ang ginawang default? Para diyan, kailangan nating bumalik sa taông 1996 kung kailan unang nilabas ang CSS pati na ang box model nito. Originally, ayon sa first CSS specification, ang sine-set ng `width` property ay ang width ng content box (hindi kasama ang padding at border). Tinawag nila ito before na <i>W3C box model</i>.

<figure class="full-bleed quotation">
  <blockquote>
  <p>The size of the box is the sum of the element width (i.e. formatted text or image) and the padding, the border and the margin areas.</p>
  </blockquote>
  <figcaption><cite><a href="https://www.w3.org/TR/REC-CSS1-961217#formatting-model">Cascading Stylesheets, level 1 specification</a></cite></figcaption>
</figure>

Ayon sa W3C spec,

<math class="fs-5 text-align--center box bordered">
  <mrow>
    <mi>overall width</mi>
    <mo>=</mo>
    <mi>width</mi>
    <mo>+</mo>
    <mi>padding</mi>
    <mo>+</mo>
    <mi>border</mi>
  </mrow>
</math>

Pero during implementation, nagkaroon ng mga problema. Dati kasi, hindi lahat ng browser ay sumusunod sa W3C box model. Para sa dalawang sikát na browsers noon, ang Netscape at Internet Explorer, ang kasama sa width ng element ang size ng border at padding. Ibig sabihin, hindi madaragdagan ang overall width ng isang element kahit may naka-set na padding at border dito. Ito ang tinawag nila na <i>Internet Explorer box model</i>.

<figure class="full-bleed cluster center-justified">
  <img
    width="190"
    height="301"
    style="border: 1px solid #0003; float: right;"
    sizes="(max-width: 1754px) 100vw, 1754px"
    srcset="
      /assets/images/posts/box-sizing/w3c-ie-box-model_athosj_c_scale,w_190.png 190w,
      /assets/images/posts/box-sizing/w3c-ie-box-model_athosj_c_scale,w_790.png 790w,
      /assets/images/posts/box-sizing/w3c-ie-box-model_athosj_c_scale,w_1215.png 1215w,
      /assets/images/posts/box-sizing/w3c-ie-box-model_athosj_c_scale,w_1754.png 1754w"
    src="/assets/images/posts/box-sizing/w3c-ie-box-model_athosj_c_scale,w_1754.png"
    alt="">
</figure>

Naging cause ito ng maraming problema. Maraming websites ang dumepende sa IE box model. Bukod pa riyan, maraming web developers at graphic designers noon ang nagsabi na mas maganda ngang gamitin ang IE box model.

Kaya naman isinama na ng W3C ang [`box-sizing`](https://www.w3.org/TR/css-ui-3/#box-sizing) property kalaunan. Ang default property nito ay `content-box` (W3C box model) at ang isa pang value nito ay `border-box` (IE box model). Pero siyempre, hindi puwedeng palitan ang default nito at gawing `border-box` dahil masisira ang mga lumang website na ginawa para sa Internet Explorer. Tandaan na mahalagang property ng Web ang backwards compatibility.

## Further reading

- [box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) - MDN Web Docs
- [Box Sizing | CSS-Tricks](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
- [Internet Explorer and the CSS box model](https://www.456bereastreet.com/archive/200612/internet_explorer_and_the_css_box_model/) - Roger Johansson
- [Cascading Style Sheets, level 1](https://www.w3.org/TR/REC-CSS1-961217#formatting-model)

[^1]: <q>A reset stylesheet (or CSS reset) is a collection of CSS rules used to clear the formatting of HTML elements.</q>&mdash;<cite>Wikipedia</cite>, [Reset style sheet](https://en.wikipedia.org/wiki/Reset_style_sheet)
