---
title: Sulit pa bang aralin ang Bootstrap sa 2022?
description: Sa panahon ng intrinsic web design, dapat mo na bang iwan ang Bootstrap?
author: teacherbuknoy
image: 
  src: /assets/images/posts/bootstrap-2022/cover.png
  color:
    light: 348 72% 73%
    dark:  348 72% 33%
seo_image:
  og: /assets/images/posts/bootstrap-2022/og.png
  twitter: /assets/images/posts/bootstrap-2022/twitter.png
tags: 
  - css
---

**Short answer:** Yes. Sulit pa ring aralin ang Bootstrap. May mga dahilan kung bait naging successful ang Bootstrap at ginagamit pa rin ito sa maraming projects, both existing at mga bagong website.

Ni-release ang Bootstrap noon pang 2011—sampung taon na ang nakalipas. Nang i-release sa public ang Bootstrap, kaka-release lang din ng version 9 ng Internet Explorer. Ngayon? Kakaatapos lang ng support ng Microsoft para sa nasabing browser. Ibang-iba na ang landscape ng web developmnet ngayon. Kaya isa-isahin natin ang mga problemang sino-solusyunan ng Bootstrap, at kung nasaan na tayo ngayon sa mga problemang ito.

## Responsive Web Design
Kapag sinasabing *responsive* ang isang web page, nag-a-adapt ito sa size ng viewport (screen o browser window). Sa nakalipas na mga dekada, mahirap gawin ang responsive web design dahil hindi ginawa ang CSS para sa ganitong paraan ng layout. `float` at media queries lang ang magagamit natin noon para sa web design. At dahil hindi naman ginawa ang `float` para sa responsive web design, unpredictable ang behavior nito. isa ito sa mga problemang sinosolusyunan ng Bootstrap. Dahil sa grid system ng Bootstrap, naging mas madali at simple ang paggawa ng responsive web pages.

Pero ngayong 2022, mas madali na bang gumawa ng responsive web pages? Sa ngayon, nasa era na tayo ng tinatawag na *intrinsic web design*. Isa itong era ng mas pinadali at improved na responsive web:

- Sa responsive web design gumagamit tayo ng fluid images na nagre-resize kasabay ng viewport, pero sa intrinsic web design, depende sa kalagayan, puwede kang gumamit ng fluid **at** fixed-sized images.
- Sa responsive web design, gumamit tayo ng fluid columns para gawing responsive ang mga layout natin. Sa intrinsic web design, gumagamit na tayo ng fluid columns **at** rows. At gaya sa images, hindi na rin kailangang fuid lahat ng columns at rows. Puwedeng gumawa ng columns na may fixed na sizes, kasama ng iba pang columns at rows na fluid-sized.
- Sa responsive web design, gumagamit tayo ng media queries para i-adjust ang layout depende sa size ng viewport. Sa intrinsic web design, gumagamit pa rin tayo ng media queries, pero dahil sa mga built-in tools sa CSS, posibleng makagawa ng responsive layouts nang *hindi* gumagamit ng media queries.

Posible lang ang intrinsic web design kung magsusulat ka ng sarili mong CSS sa halip na gumamit ng Bootstrap o iba pang frameworks. Sa intrinsic web deisgn, hindi na tayo constrained sa 12 columns lang; puwede kang gumawa ng layouts gamit ang kahit ilan pang columns *at rows* na gusto mo.

### CSS Grid
Ang **CSS Grid** ang isa sa pinaka-powerful na feature na naidagdag sa CSS simula nang una itong i-release. Kung dedepende ka sa isang framework, hindi mo mate-take advantage ang feature na ito. Ang CSS Grid ay *framework* mismo na built-in sa mga browser. Sa Bootstrap at iba pang gaya nito, nakadepende ang layouts sa 12-column pattern. Bawat isa sa mga column na ito ay may width na 8.333333% (100% ÷ 12), kaya kapag ni-resize ang browser, sabay-sabay ding nagre-resize ang lahat ng columns.

Pero gamit ang CSS Grid, may ability na tayong magkaroon ng *stages of squishiness*. Puwede kang mag-set ng kahit ilang columns at rows na gusto mo. Puwede mo ring bigyan ng iba't ibang sizes ang mga columns mo, at puwedeng-puwede mo ring bigyan ang mga columns at rows ng sizes na flexible gamit ang percenty, `vw` at `vh`, at `fr` units, o fixed sizes gaya ng `px`, `rem`, `em`, at `ch`. Pansinin ang example na ito:


<div class="code-sample">

<div class="code-result resizable">
  <a class="primary button" href="/assets/images/posts/bootstrap-2022/css-grid-example-1.html" target="_blank">Buksan sa bagong tab</a>
  <iframe src="/assets/images/posts/bootstrap-2022/css-grid-example-1.html"></iframe>
</div>

```css
.grid {
  display: grid;
  gap: 5px;
  padding: 1rem;
  grid-template-columns: 100px 15vw 10% 1fr 25vh 10rem 5ch 2fr;
}
```

<div class="code-notes">

Sa example na ito, pansinin na mayroon tayong 8 columns. Ikaw ang bahala kung ilang columns (or rows) ang gusto mong ilagay sa grid mo. At di gaya ng Bootstrap at iba pang frameworks na pare-parehong size ang bawat columns, puwede tayong gumamit ng iba-ibang sizes at units sa CSS Grid. Pansinin na fixed ang isang column dito (`100px`) at hindi ito magre-resize kahit kailan. Ang ilan naman ay nakadepende sa font size (`10rem` at `5ch`). Ang iba ay gumagamit ng percentage na nakabase sa width ng container (`10%`) at width ng viewport (`15vw`). Puwede rin nating ibase ang width ng column sa height ng viewport (`25vh`, subukang i-resize ang result vertically para makita kung paano nagre-resize ang `25vh` na cell). At puwede rin nating gamitin ang `fr` unit para i-distribute ang natitirang space sa iba't ibang elements (`1fr` at `2fr`).

</div>

</div>


Gamit din ang CSS Grid, puwede tayong magkaroon ng *conditional* na row at column sizes. Gamit ang mga CSS function na `max()`, `min()`, at `clamp()`, puwede tayong mag-set ng mga limit sa sizes ng mga column at row natin.

<div class="code-sample">

<div class="code-result resizable">
  <a class="primary button" href="/assets/images/posts/bootstrap-2022/example-2.html" target="_blank">Buksan sa bagong tab</a>
  <iframe src="/assets/images/posts/bootstrap-2022/example-2.html"></iframe>
</div>

```css
.grid {
  display: grid;
  gap: 5px;
  padding: 1rem;
  grid-template-columns: min(20ch, 50vw) max(15ch, 25%) clamp(25ch, 30vw, 150ch);
}
```

<div class="code-notes">

Sa example na ito, ginamit natin ang `min()`, `max()`, at `clamp()` functions.

- **`min(20ch, 50vw)`**: ang magiging size ng column na ito ay kung ano ang mas maliit sa dalawang values. Tumatanggap din ito ng tatlo o mas marami pang values na puwedeng pagpilian.
- **`max(15ch, 25%)`**: kabaligtaran ito ng `min()`. Pipiliin nito ang mas malaki sa dalawa o higit pang values.
- **`clamp(25ch, 30vw, 150ch)`**: iko-constrain ng `clamp()` ang size ng column sa pagitan ng minimum (`25ch`) at maximum (`150ch`) values, kahit flexible pa rin ang size nito (`30vw`). Sa kaso natin, `30vw` ang magiging size ng column kaya mag-a-adjust ito sa size ng viewport, pero hindi ito lalampas sa `150ch` o mas liliit sa `25ch`.

</div>

</div>

### Flexbox

Isa pa sa mga powerful features ng modern CSS ang Flexbox. Kung rows at columns ang ibinibigay sa atin ng CSS Grid, one-dimensional naman ang Flexbox (either column or row). Mula sa pangalan nito, binibigyan tayo nito ng ability na gawing flexible ang layout ng mga box sa layout natin—both sa sizes at spacing, at pati na rin sa posiitoning. Gamit ang Flexbox, posibleng makagawa ng responsive layouts nang walang media queries. tingnan ang example na ito kung saan sa mas malalaking viewport sizes, magkatabi sa horizontal axis ang sidebar at ang main content, pero nag-i-stack sila vertically kapag hindi na sapat ang horizontal space. Pansinin na walang ginamit na kahit anong media query para dito.

<div class="code-sample">

<div class="code-result resizable">
  <a class="primary button" href="/assets/images/posts/bootstrap-2022/example-3.html" target="_blank">Buksan sa bagong tab</a>
  <iframe src="/assets/images/posts/bootstrap-2022/example-3.html"></iframe>
</div>

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
}

.container__sidebar {
  flex-grow: 1;
  flex-basis: 25ch;
}

.container__main-content {
  flex-basis: 0;
  flex-grow: 999;
  min-width: 60%;
}
```

<div class="code-notes">

- Ginawa nating flexbox ang layout ng contianer gamit ang `display: flex`
- Dahil sa `flex-wrap: wrap`, lilipat sa next line ang mga element na hindi na kasya sa inline space.
- Sinasabi naman ng `flex-grow` property kung ilang parts ng available space ang kukunin ng bawat flex item. Isang part lang ang kukunin ng `.container__sidebar`, samantalang `999` ang kukuning space ng `.container__main-content`. Malaking value ang 999, pero hindi magiging sobrang liit ang `.container__sidebar` dahil sa `flex-basis` nito.
- Kapag naglagay tayo ng `flex-basis`, nagsa-suggest tayo sa browser ng preferred size natin para sa isang element. Dahil may `flex-basis: 25ch` ang `.container__sidebar`, sisikapin ng browser na gawing `25ch` ang width nito hangga't maaari. Ito ang dahilan kung bakit hindi nagiging sobrang liit ng `.container__sidebar`.
- Sinet natin sa `0` ang `flex-basis` ng `.container__main-content` pero nilagyan natin ito ng `min-width: 60%`. Ibig sabihin, hindi puwedeng maging mas maliit sa 60% ng width ng container ang width ng main content. Kapag nangyari ito, ililipat na ng browser ang main content papunta sa next line. Dahil dito, automatic na nag-a-adjust ang layout ng sidebar at main content nang hindi gumagamit ng media queries. [^1]

</div>

</div>

## Browser Support at Consistency

Hindi laging consistent ang mga features natin sa web. Dahil sa iba-ibang implementation ng mga browsers, iba-iba rin ang behavior ng mga ginagamit nating features. Puwedeng gumagana ang isang feature sa isang browser, pero sira naman sa iba. Puwede rin namang gumagana ito sa lahat ng browsers pero may bugs ang implementation. Isa ito sa mga problemang sinosolusyonan ng Bootstrap (at ng jQuery para sa JavaScript).

Sa nakalipas na mga taon, naging mas improved na ang estado ng mga browser implementation. Mas consistent na ito sa lahat ng browsers kaya hindi na natin kailangang mag-alala na baka masira ang sites natin sa mga browsers na hindi natin na-test. Isa sa mga dahilan nito ay ang coordination ng mga browser vendors at ng World Wide Web Consortium (W3C), ang standards body para sa web.

Kapag may idadagdag na bagong features sa CSS, kailangan itong ma-test ng developers para malaman kung ito ba ang sagot sa mga use case na mayroon sila. Dati, para ma-test ito, inilalagay ang mga bagong features sa mga browsers gamit ang mga *vendor prefix* gaya ng `webkit-` para sa Safari at Chrome, `-moz-` para sa Firefox, at `-o-` para sa Opera browser. Signal ito sa mga developer na hindi pa puwedeng gamitin sa mga production sites ang mga bagong features ng CSS. Pero hindi ito nasusunod ng iba, at ginagamit pa rin ang mga features na under testing pa kahit sa mga production sites. Kaya naman iba-iba ang bugs, iba-iba ang implementation, at iba-iba ang effect sa mga browser, kaya nagkaroon ng inconsistency na sinubukang solusyunan ng Bootstrap.

Sa mas recent na mga taon, nagkasundo ang mga browser vendor na huwag nang gumamit ng vendor prefixes. Instead, nag-release sila ng mga special version ng browsers nila na para lang sa developers. Halimbawa nito ang Safari Technology Preview, Firefox Nightly, at Chrome Canary. Sa mga browser na ito, kailangang i-turn on ang mga experimental na features kung gusto itong i-test ng mga developers. Kaya kapag ready na ang isang CSS feature at na-ship na ito sa mga browser, consistent na for the most part ang implementation nito, na-resolve na ang karamihan sa mga bugs, at alam na ng mga browser engineers ang next step na gagawin sa mga bagong feature.[^2]

## Dapat pa bang gumamit ng Bootstrap?

Sa panahon ng intrinsic web design at mas consistent na implementations across browsers, **oo, may benefits pa rin ang paggamit ng Bootstrap.** Sa 2021 survey na [State of CSS](https://2021.stateofcss.com/), 85% ng respondents ang nagsabi na nakagamit na sila ng Bootstrap samantalang 41% ang nagsabi na gagamitin pa nila ulit ang Bootstrap. Sa maraming kompanya, Bootstrap pa rin ang ginagamit nila. Ayon sa [similartech.com](https://www.similartech.com/technologies/bootstrap), nasa 21,142 websites na hosted sa Pilipinas ang gumagamit pa rin ng Bootstrap. malinaw na kailangan pa rin nating at least matutunan kung paano gamitin ang Bootstrap, if at least magme-maintain tayo ng mga project na gumamit ng Bootstrap.

Paano naman sa mga bagong project? Sulit pa bang gumamit ng Bootstrap? Depende ang sagot dito sa kung anong klaseng project ang bubuohin mo. Kung isang tool ang gagawin mo, o malaking project na mas nakapokus sa business logic, makakatulong ang Bootstrap sa iyo. Kung balak mong bumuo ng isang simpleng prototype para ipakita ang overview ng functionality na balak mong gawin, makakatulong din ang Bootstrap sa iyo. Pero kung bubuo ka ng isang project na may nakahanda nang design system at branding, mas magiging okay kung gagawa ka o ang team mo ng sarili ninyong CSS framework para maging consistent sa design specifications ang styling at layout ng website ninyo. Ito rin ang magandang gawin kung bubuo ka ng design portfolio site na magre-reflect ng personal branding mo.

Anoman ang mapili mong gawin, mahalaga na bago ka gumamit ng CSS frameworks at libraries, kailangan munang matutuhan ang mga fundamentals ng CSS, lalong-lalo na ang **cascade, specificity, at inheritance.** Para sa ibang developers, gumagamit sila ng CSS frameworks at libraries para lang maiwasang aralin ag CSS. Huwag matakot na aralin ang CSS. Marami kang puwedeng mabuong magagandang projects gamit ito. Kung dedepende ka sa isang CSS framework o library, nililimitahan mo lang ang sarili mong creativity. Kaya huwag matakot na subukang bumuo ng website gamit lang ang vanilla CSS. Sulit na sulit ito.

[^1]: Ito ay isang example ng technique na tinatawag na [*algorithmic layouts*](https://www.youtube.com/watch?v=qOUtkN6M52M).
[^2]: Isa sa pinaka-recent na efforts para resolbahin ang mga inconsistency sa mga browser ay ang [Interop 2022](https://web.dev/interop-2022/)