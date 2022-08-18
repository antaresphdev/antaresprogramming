---
title: min(), max(), at clamp()
description: Gamit ang modern techniques na ito, mas madali nang makagawa ng responsive web layouts.
author: teacherbuknoy
image: 
  src: /assets/images/posts/min-max-clamp/min-max-clamp.png
  color:
    light: 39 88% 90%
    dark: 22 80% 35%
seo_image:
  og: /assets/images/posts/min-max-clamp/fb_image.png
  twitter: /assets/images/posts/min-max-clamp/twitter_image.png
tags: 
  - css
  - deep dive
---

Sa tulong ng mga bagong features ng CSS, puwede na tayong makagawa ng mga layout na imposible nating magawa noon, kahit pa gumamit tayo ng mga framework o library. Sa article na ito, pag-usapan natin ang tatlo sa maraming functions ng CSS, ang `min()`, `max()`, at `clamp()`, at kung paano natin sila magagamit sa responsive design.

## I-set ang width gamit ang `min()` function

Kapag binigyan natin ang `min()` function ng dalawa o mas marami pang values, pipiliin ng browser kung alin sa mga value na iyon ang pinakamaliit. Tingnan ang example na ito.

<div class="code-sample">

```css
.element {
  width: min(100px, 400px, 250px); /* 100px */
}
```

</div>

Nagpasa tayo ng tatlong values sa `min()` function—`100px`, `400px`, at `250px`. Dahil `100px` ang pinakamaliit sa tatlong values na ito, `100px` ang magiging value ng `width` property. Simple lang ang `min()` function. Pero paano ito magiging useful sa web layouts?

Puwede nating gamitin ang `min()` function para mag-set ng limit sa width ng mga elements sa page. Pansinin ang example na ito. Mayroon tayong paragraph na may 300 words.

<div class="code-sample">

```html
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde possimus, doloribus, sed eius, excepturi optio minus eos suscipit molestiae saepe similique alias aperiam nobis culpa fugiat labore dolor quia officia nisi? Tempore consectetur voluptatem ipsa quae suscipit eius, distinctio voluptate maiores magni neque, reprehenderit maxime. Natus officiis nam nulla, exercitationem, corporis tempore aliquid non voluptatem obcaecati cupiditate at sequi nihil doloribus esse amet unde ab ex tempora et dolorum. Hic, praesentium maiores cum eligendi obcaecati eveniet rem provident illo dignissimos odio nobis tempore iusto numquam, molestiae accusamus aperiam tempora deserunt sunt quisquam corrupti consectetur. Omnis adipisci id eos ab blanditiis beatae, laudantium modi officia nobis repudiandae aliquid vel nostrum incidunt minus dolor excepturi eum quaerat. Ex, error veritatis mollitia dolore similique eos voluptatum deserunt voluptates facilis sint ratione molestiae animi ut deleniti doloremque libero sit consequuntur commodi! Ipsam fuga veritatis eveniet eaque eos expedita quisquam iure minus non incidunt. Libero, maxime perferendis porro possimus nulla est ea rem quo veritatis a impedit, voluptates molestias modi, placeat laborum quasi consequatur ut praesentium cumque quis sequi. Fugiat maiores dolores dolorem earum cum adipisci labore ab laboriosam nemo! Eius deserunt quisquam porro quo delectus exercitationem veritatis rem debitis nihil itaque provident doloremque quas ea natus, dolore, aliquam rerum totam assumenda impedit recusandae vero! Excepturi, corporis id. Eaque aut quos obcaecati quidem sint tempore animi, illum similique rem magnam expedita sed iste tempora voluptate magni, fugiat placeat veritatis a nostrum blanditiis error neque inventore corporis. Dignissimos quo necessitatibus sequi assumenda fuga modi nesciunt recusandae maxime, voluptatum architecto dolores, amet doloremque pariatur vel eum? In odio sapiente ut tempora, laudantium sit eaque distinctio soluta perspiciatis numquam ea minus assumenda adipisci incidunt ab suscipit vitae, facere, hic asperiores! Nostrum ut consectetur sunt. Quos ex, nobis saepe reiciendis qui ad, tempora, obcaecati eius itaque sed doloribus?</p>
```

<div class="code-result resizable">
  <iframe src="/assets/images/posts/min-max-clamp/example-1.html"></iframe>
</div>

</div>

Kapag sinubukan mong i-resize ang example na iyan, sasakupin ng paragraph ang buong width ng viewport. Hindi madaling basahin ang text kung masyadong mahaba ang width nito. Puwede nating gamitin ang `min()` property para i-limit ang width nito sa 65 characters para mas madali itong basahin. Lalagyan din natin ito ng auto na `margin-inline` para ma-center ito horizontally

<div class="code-sample">

```css
p {
  margin-inline: auto; /* margin-left at margin-right */
  width: min(65ch, 100%);
}
```

<div class="code-result resizable">
  <iframe src="/assets/images/posts/min-max-clamp/example-2.html"></iframe>
</div>

</div>

Binigyan natin ang `min()` function ng dalawang pagpipilian: `65ch` at `100%` ng parent element. Kung alin sa dalawang ito ang mas maliit, iyon ang magiging width ng paragraph. Kaya kapag ni-resize natin ang example, 65 characters ang magiging width ng paragraph kung mas malaki ang viewport kaysa sa 65 characters. Pero kung mas maliit ito, mag-a-adjust ang width ng paragraph kasabay ng viewport.

Base sa example na ito, nagiging mas useful ang `min()` function kung magse-set ka ng isang fixed value, gaya ng `65ch`, na hindi gaanong magbabago, at isang flexible value, gaya ng `100%`, na nagiging basehan ng adjustment ng width ng element.

## Ang `max()` function

Kabaligtaran naman ng `min()` ang `max()` function. Pinipili nito ang pinakamalaki sa mga ibibigay nating values dito.

<div class="code-sample">

```css
.element {
  width: max(100px, 400px, 250px); /* 400px */
}
```

</div>

Puwede nating gamitin ang `max()` function sa mga padding at margin. Dahil wala tayong properties na gaya ng `min-padding` o `min-margin`, puwede nating gamitin ang `max()` function para mag-adjust ang padding at margin kasabay ng width ng parent ng element o ng viewport.

<div class="code-sample">

```css
  .square {
    padding: max(3rem, 10vw);
  }
```

<div class="code-result resizable">
  <iframe src="/assets/images/posts/min-max-clamp/example-3.html"></iframe>
</div>

</div>

Sa example na ito, naka-set ang padding ng `.square` sa 10% ng viewport width (width ng browser window). Pero kapag mas maliit na ang viewport, magiging fixed sa `3rem` ang padding ng `.square` dahil lagi nang mas malaki ang `3rem` kumpara sa 10% ng viewport.

## Typography at `clamp()`

Dahil wala tayong `min-font-size` at `max-font-size` property, puwede nating gamitin ang `clamp()` function para mag-set ng `font-size` na nagre-resize kasabay ng container nito, o ng browser viewport. Puwede rin tayong maglagay ng minimum at maximum font size para hindi masyadong malaki o maliit ang text. Tingnan ang example na ito.

<div class="code-sample">

```css
  p {
    font-size: 10vw;
  }
```

<div class="code-result resizable">
  <iframe src="/assets/images/posts/min-max-clamp/example-4.html"></iframe>
</div>

</div>

Sa example na ito, na-achieve natin ang flexible na `font-size`. Pero masyado itong malaki, dahil 10% ng viewport ang `font-size` natin. Kapag ni-resize naman natin ang viewport, sumosobra naman ang liit nito. Kailangan nating mag-set ng maximum at minimum na `font-size`. Para dito, puwede nating gamitin ang `clamp()` function.

![Kailangan ng clamp function ng tatlong comma-separated values. Minimum value ang una, preferred value (o flexible value) ang ikalawa, at maximum value ang ikatlo.](/assets/images/posts/min-max-clamp/clamp.svg){.invert-on-dark}

<div class="code-sample">

```css
  p {
    font-size: clamp(2rem, 10vw, 3rem);
  }
```

<div class="code-result resizable">
  <iframe src="/assets/images/posts/min-max-clamp/example-5.html"></iframe>
</div>

</div>

Sa example naman na ito, gumamit na tayo ng `clamp()` para sa `font-size`. `10vw` pa rin ang font size ng paragraph, kaya magre-resize pa rin ito kasabay ng browser viewport. Pero naglagay na tayo ng minimum na `2rem` at maximum na `3rem`. Ibig sabihin, hindi magiging mas maliit sa `2rem` o mas malaki sa `3rem` ang `font-size`.

## Ikaw naman

Saan mo gagamitin ang `min()`, `max()`, at `clamp()`? I-share mo sa amin sa comment section ng aming <a href="https://facebook.com/antaresphdev" target="_blank" rel="noopener">Facebook page</a>, o i-mention kami sa Twitter gamit ang aming username, <a href="https://twitter.com/antaresphdev" target="_blank" rel="noopener">@antaresphdev</a>.