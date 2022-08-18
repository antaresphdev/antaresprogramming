---
title: Custom scrollbars gamit ang CSS
description: Puwede na nating i-customize ang mga scrollbar nang walang JavaScript
image: 
  src: /assets/images/posts/css-custom-scrollbars/cover.png
  color:
    light: 173 58% 79%
    dark: 173 58% 19%
seo_image: /assets/images/posts/css-custom-scrollbars/seo_cover.png
author: teacherbuknoy
slug: /css-custom-scrollbars/
tags:
  - css
---

Two years ago, inilabas ng W3C ang [CSS Scrollbars specification](https://www.w3.org/TR/2018/WD-css-scrollbars-1-20180925). Idinagdag nito ang bagong CSS properties na magagamit natin para ma-customize ang styling ng mga scrollbar. Sa ngayon, Firefox pa lang ang browser na nag-i-implement ng specification na ito dahil nasa <i>working draft</i> stage pa lang ang CSS Scrollbars specification.

Pero hindi ibig sabihin nito na hindi na natin mako-customize ang mga scrollbars natin gamit ang CSS. Bago pa dumating ang CSS Scrollbars spec, may paraan na para ma-customize ang look ng mga scrollbars. Sa article na ito, titingnan natin kung paano natin ito magagawa.

## CSS Scrollbars

Una nating gagamitin ang CSS scrollbars. Dahil ito ang nakalagay sa official specs, darating ang panahon na gagana rin ito sa lahat ng browsers. Pagdating ng time na iyon, wala na tayong ibang kailangang gawin sa code natin[^1] dahil ngayon pa lang, na-implement na natin ang code natin according to the specifications.

Ayon sa specifications na ito, puwede nating gamitin ang `scrollbar-width` at `scrollbar-color` para ma-customize ang mga scrollbars natin.
Gamitin natin iyan sa isang sample na webpage. Sa example na ito, may scrollbar ang `article` element natin. Tandaan, <strong>sa Firefox pa lang ito gagana.</strong>

```css
article {
  scrollbar-width: auto;
  scrollbar-color: #000a dodgerblue;
}
```

### `scrollbar-width`

Sini-set ng `scrollbar-width` kung gaano kakapal ang scrollbar. Ayon sa specifications, may tatlo itong values:

<dl>
    <dt><code>auto</code></dt>
    <dd>Ito ang default na value.</dd>

    <dt><code>thin</code></dt>
    <dd>Mas manipis ang scrollbar kaysa sa default. Bago ito gamitin, i-consider ang magiging experience ng mga user mo. May mga user na hirap gumamit ng mouse. Mas magbe-benefit sila kung medyo makapal ang scrollbar.</dd>

    <dt><code>none</code></dt>
    <dd>Walang scrollbar na magdi-display sa screen. Puwede pa ring mag-scroll ang user, pero walang scrollbar na makikita. Siguruhin na may sapat na visual cue para malaman ng user na puwedeng mag-scroll sa content mo. Puwede mong lagyan ng naka-<code>inset</code> na <code>box-shadow</code> ang content mo para malaman ng user na puwedeng mag-scroll. Puwede mo ring gamitin ang <code>:hover</code> pseudo-class para i-set ang <code>scrollbar-width</code> pabalik sa <code>auto</code> o <code>thin</code> kapag tinutok ng user ang mouse pointer niya sa scrollable na content.</dd>

</dl>

May tatlo pang ibang values na puwedeng ilagay sa `scrollbar-width` ayon sa specifications, pero wala pang browser currently na nakakapag-implement ng mga iyon. Kung mai-implement ito ng browsers, in the future, puwede na nating i-set kung gaano kakapal ang scrollbar gamit ang mga length values gaya ng `px` at `rem`. Puwede rin nating ipaubaya sa operating system ang magiging hitsura ng scrollbar depende kung `dark` o `light` ang gusto nating theme ng scrollbar. Pero hindi pa natin iyon magagawa ngayon.

### `scrollbar-color`

Sini-set naman ng `scrollbar-color` kung ano ang magiging kulay ng scrollbars. May dalawang parts ang scrollbars: ang <i>track</i> at <i>thumb</i>. Thumb ang tawag sa part ng scrollbar na gumagalaw kapag nag-i-scroll ang user. Track naman ang tawag sa background ng scrollbar. Gaya sa example, puwede nating i-set ang kulay ng dalawang parts na ito gamit ang syntax na ito:

```css
scrollbar-color: <kulay ng thumb> <kulay ng track>;
```

Sa example natin, ginamit natin ang syntax na ito para i-set sa `dodgerblue` ang track, at `#0003` naman ang sinet natin para sa thumb. Dahil dito, magiging transparent black ang scrollbar thumb.

```css
scrollbar-color: #0003 dodgerblue;
```

Kung nasa Firefox ka, makikita mo na gagana ang custom scrollbar natin sa example na ito:

<p class="codepen" data-height="434" data-theme-id="light" data-default-tab="css,result" data-user="maniczirconium" data-slug-hash="MWjeJQR" style="height: 434px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Scrollbars">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/MWjeJQR">
  CSS Scrollbars</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<figure>
    <img src="/assets/images/posts/css-custom-scrollbars/css-scrollbar.png" alt="Sa Firefox, magiging dodgerblue ang scrollbar track at dark blue naman ang scrollbar thumb">
    <figcaption>Figure 1: Ang output ng example code, sa Firefox</figcaption>
</figure>

## Custom scrollbar para sa ibang browsers

Kahit sa Firefox pa lang gumagana ang CSS Scrollbars, puwede pa rin nating i-customize scrollbars para sa ibang browsers. Bago pa nagsimula ang W3C sa pag-draft ng CSS Scrollbars, may way na para ma-customize ang scrollbars sa mga browsers na naka-base sa Webkit (Safari) at Blink (Chrome, Opera, etc.). Ginawa ang CSS Scrollbars specification mainly para i-standardize at magkaroon ng official way sa CSS kung paano isa-style ang mga scrollbar.

Dahil dito, puwede tayong gumawa ng tinatawag na <i>progressive enhancement</i>. Isa itong technique kung saan ibibigay natin sa users ang pinaka-basic na features na gagana sa lahat ng browsers, at saka natin ilalagay ang mga mas advanced na features sa mga browser na may support para dito.

Sa Webkit at Blink browsers, meron tayong pseudo-element selectors sa halip na mga property. Puwede nating gamitin ang `::-webkit-scrollbar` selector para i-set ang mga styles para sa buong scrollbar, gaya ng `width` o kapal ng scrollbar. Puwede naman nating gamitin ang `::-webkit-scrollbar-thumb` at `::webkit-scrollbar-track` para lagyan ng styling ang thumb at track ng scrollbars. Pansinin na dahil selectors ang ginagamit natin, mas marami tayong puwedeng gawing styling dito kumpara sa CSS Scrollbars specification. [^3]

```css
article::-webkit-scrollbar {
  width: 12px;
}

article::-webkit-scrollbar-track {
  background: dodgerblue;
  border-radius: 0.5em;
}

article::-webkit-scrollbar-thumb {
  background-color: #000a;
  border-radius: 0.5em;
}
```

<p class="codepen" data-height="438" data-theme-id="light" data-default-tab="result" data-user="maniczirconium" data-slug-hash="RwGRjoo" style="height: 438px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Scrollbars (Progressively Enhanced)">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/RwGRjoo">
  CSS Scrollbars (Progressively Enhanced)</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<figure>
    <img src="/assets/images/posts/css-custom-scrollbars/css-scrollbars-progressively-enhanced.png" alt="Sa karamihan ng browsers, magiging dodgerblue ang scrollbar track at dark blue naman ang scrollbar thumb. Bukod diyan, pansinin na puwede rin nating i-set ang border-radius ng scrollbar.">
    <figcaption>Figure 2: Ang output ng example code, sa Chrome</figcaption>
</figure>

Pansinin na dahil nga selectors ang gamit natin, puwede nating i-set ang `border-radius` ng scrollbar natin. Huwag ding mag-alala regarding sa conflicts ng styling. Dahil hindi kilala ng Firefox ang `::-webkit-scrollbar` selector at mga kasama nito, hindi niya ito papansinin. Sa halip, ia-apply lang ng Firefox ang nilagay nating `scrollbar-width` at `scrollbar-color` properties. At dahil hindi pa supported ang CSS Scrollbars sa Chrome at iba pang Blink at Webkit browsers, hindi nila ito papansinin. Ia-apply lang nila ang mga styles na nasa mga `::-webkit-scrollbar` selectors natin. At kapag dumating ang time na supported na ng lahat ng browsers ang CSS Scrollbars, wala na tayong kailangang baguhin sa code natin dahil hindi na iyon papansinin ng latest browsers.

## Custom scrollbars gamit ang JavaScript

Puwede rin tayong gumamit ng JavaScript libraries para i-customize ang mga scrollbar natin para sa ilang cases kung saan hindi gumagana ang lahat ng suggestion dito para sa ilang browsers. Puwede tayong magkaroon ng mas maraming styling options gamit ang mga JavaScript libraries na ito, gaya ng transition at animation. Pero tandaan na may impact sa performance ang mga JavaScript libraries na ito, kaya pag-isipan muna kung sulit bang i-sacrifice ang performance para lang mapaganda ang scrollbars mo.

Heto ang ilan sa mga JavaScript libraries na puwede mong gamitin para ma-customize pa lalo ang scrollbars sa site mo:

- [simplebar](https://github.com/Grsmto/simplebar)
- [simple-scrollbar](https://github.com/buzinas/simple-scrollbar)

May tutorial ding isinulat si Das Surma kung paano iko-customize ang scrollbars nang hindi gumagamit ng JavaScript libraries, although kailangan nito ng kaunting JS code para sa setup. **Warning**, medyo komplikado ang way na ito.

- [CSS Deep-Dive: matrix3d() For a Frame-Perfect Custom Scrollbar](https://developers.google.com/web/updates/2017/03/custom-scrollbar)

\*[W3C]: World Wide Web Consortium, ang group na in-charge sa paggawa ng standards para sa mga bagong feature ng Web.

[^1]: Technically, wala na tayong kailangang baguhin sa code natin kapag nasa lahat na ng browsers ang CSS Scrollbars. Pero dahil nasa <i>working draft</i> stage pa ang CSS Scrollbars specification, puwede pang magkaroon ng pagbabago. Ia-update ko ang post na ito in the future para i-reflect ang changes na iyon.
[^3]: Dahil nasa working draft stage pa lang ang CSS Scrollbars, marami pang features na puwedeng maidagdag dito, kaya puwedeng dumating ang time kung kailan magkakaroon tayo ng mas maraming styling options para sa scrollbars. For now, `scrollbar-width` at `scrollbar-color` pa lang ang official na nasa drafts.
