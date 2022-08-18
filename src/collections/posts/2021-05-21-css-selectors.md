---
title: "Mga CSS Selector"
description: Bukod sa HTML tags, puwede tayong gumamit ng patterns, o selectors, para sabihin sa CSS kung sa aling HTML elements lang mag-a-apply ang styling natin.
image: 
  src: /assets/images/posts/css-selectors/cover.png
  color:
    light: 0 0% 93%
    dark: 0 0% 13%
seo_image: /assets/images/posts/css-selectors/seo-cover.png
author: teacherbuknoy
tags:
  - css
---
## Mga Selector
Bukod sa HTML tags, puwede tayong gumamit ng patterns, o selectors, para sabihin sa CSS kung sa aling HTML elements lang mag-a-apply ang styling natin.

Ginagamit ang selectors para sabihin sa browser kung aling HTML elements ang lalagyan nito ng styling. Sa nakaraang lesson, ginamit natin ang <b>type selectors</b> para i-select ang HTML elements gamit ang tag nila. Sa lesson na ito titingin pa tayo ng maraming selectors.

## Mga Basic Selector
### Type selectors
Ito ang ginamit natin last lesson. Ginagamit natin ito para ma-select ang HTML elements gamit ang HTML tag nila. Para gamitin ito, inilalagay lang natin sa selector ang tag name ng HTML element (ang part na nasa pagitan ng angle brackets).

Halimbawa, gusto nating i-select ang lahat ng paragraph sa HTML, gagamitin natin ang `p` bilang selector natin:

```css
p {...}
```

### Universal selector
Ginagamit natin ang unversal selectors kapag gusto nating i-select ang *lahat* ng elements. Gumagamit tayo ng asterisk (\*) para sabihin sa browser na gusto nating i-style lahat ng elements.

Sa example na ito, dahil universal selector ang ginamit natin, magiging kulay pula ang kulay ng text ng lahat ng HTML elements.

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="css,result" data-user="maniczirconium" data-slug-hash="NWNMBeX" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Universal Selectors">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/NWNMBeX">
  Universal Selectors</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### Class selector
Sa lahat ng selectors, ito ang pinakamadalas mong gagamitin. Sine-select nito ang HTML elements gamit ang value na nasa `class=""` attribute nito. Halimbawa, para ma-select ang HTML element na ito:

```html
<p class="align-to-right">This is a paragraph that is aligned to the right side of the screen.</p>
```

&hellip;gagamitin natin ang selector na ito:

```css
.align-to-right {...}
```

Ikaw din ang magse-specify ng value ng `class=""` attribute. Madalas mo itong magagamit dahil gamit ito, puwede mong baguhin ang design ng buong webpage nang hindi naka-depende sa structure ng HTML code. Siyempre, puwede mo pa ring gamitin lahat ng iba pang CSS selectors, pero ito ang malamang na pinakamadalas mong gagamitin.

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="html,result" data-user="maniczirconium" data-slug-hash="MWyGBxz" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Class Selectors">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/MWyGBxz">
  Class Selectors</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Sa CSS, nilalagyan natin ng tuldok (`.`) ang simula ng bawat class selectors. Sa example na ito, makikita na mayroon tayong dalawang magkaibang class, ang `align-to-right` at `red-text`. Pero puwede rin natin silang gamitin nang sabay sa iisang HTML tag, gaya ng ginawa natin sa pangatlong paragraph:

```html
<p class="align-to-right red-text">In 1995, Menzel auditioned for Rent, which became her first professional theatre job and her Broadway debut. Rent opened Off-Broadway at the New York Theatre Workshop on January 26, 1996, but it moved to Broadway's Nederlander Theatre due to its popularity. For her performance as Maureen Johnson in the original cast of the musical, Menzel received a Tony nomination as Best Featured Actress in a Musical losing to Ann Duquesnay for Bring in 'da Noise, Bring in 'da Funk. Her final performance in the musical was on July 1, 1997.</p>
```

Kung gusto nating gumamit ng isa o higit pang class sa iisang HTML element, naglalagay lang tayo ng isang space sa pagitan nila.

### ID selectors
Sine-select ng ID selectors ang mga HTML element base sa value ng `id=""` attribute nila. Di-gaya ng `class=""` attributes, iisa lang ang puwedeng value ng `id=""` attribute. Bukod pa riyan, *hindi ito puwedeng magkaroon ng kaparehong ID sa isang webpage.*

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="css,result" data-user="maniczirconium" data-slug-hash="XWdqBvL" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="ID Selectors">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/XWdqBvL">
  ID Selectors</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Sa CSS, ini-specify natin ang ID selectors kapag naglalagay tayo ng pound sign o hashtag sa simula ng selector.

### Attribute selector
Sine-select naman ng attribute selectors ang HTML elements base sa value ng iba't iba nilang attributes. Dito, puwede mong i-select ang HTML elements gamit ang kahit na anong attribute nila, hindi lang ang `class=""` o `id=""`.

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="css,result" data-user="maniczirconium" data-slug-hash="rNevZaE" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Attribute Selectors">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/rNevZaE">
  Attribute Selectors</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Sa example na ito, ginawa nating `dodgerblue` ang kulay ng text ng link na `_blank` ang value ng `target` attribute. Kapag wala namang laman ang `target` attribute, magiging kulay pula ang text nito. Pero kapag wala itong `target` attribute, hindi ito apektado ng kahit alin sa dalawang CSS rules natin.

## Paggugrupo ng mga selector

May mga time na may mga HTML elements tayo na magkaparehas ng styling pero magkaiba ng HTML tag, class, id, o attribute. Sa mga ganitong kaso, napakauseful na pagsamahin sila sa iisang CSS rule, gaya nito:

```css
.red-text,
#red-din-ako {
  color: red;
}
```

Makikita natin sa code na ito na pinagsama natin ang `.red-text` at `#red-din-ako` sa iisang rule. Magiging kulay red na ang text ng dalawang element na ito:

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="result" data-user="maniczirconium" data-slug-hash="OJNZoNQ" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Selector Grouping">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/OJNZoNQ">
  Selector Grouping</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Combinators
Ang combinators ay mga pattern ng selectors na nagse-select ng HTML elements base sa structure nila sa Document Object Model.

### Descendant combinator
Gamit ang space (` `), ini-indicate natin sa browser na ise-select natin ang mga elements na nasa loob ng isang HTML element (na kung tawagin ay descendant). Halimbawa, sa HTML na ito, makikita na sa loob ng `<p></p>`, mayroon tayong `<em></em>` at `<strong></strong>`. At sa labas naman ng `<p></p>` tags, mayroon din tayo ng dalawang tags na iyon:

```html
<p>Following the <em>success</em> of Rent, Menzel released her first solo album entitled Still I Can't Be Still on Hollywood Records, Menzel also originated the role of Dorothy in Summer of '42 at Goodspeed Opera House in Connecticut, starred as Sheila in the New York City Center Encores! production of Hair and appeared on Broadway as Amneris in Aida. <strong>Menzel earned a Drama Desk Award nomination</strong> for her performance as Kate in the Manhattan Theatre Club's 2000 Off-Broadway production of Andrew Lippa's The Wild Party. Her other Off-Broadway credits include the pre-Broadway run of Rent and The Vagina Monologues.</p>

<em>This is an emphasis.</em>
<strong>This is a strong emphasis.</strong>
```

Tingnan naman ang sumusunod na CSS rule. Dito, ginamit ang `p em` para i-indicate na ang magiging kulay pula lang ay ang text ng `<em>` na nasa loob ng `<p>`. Dahil dito, walang nagbago sa kulay ng `<em>` nasa labas ng `<p>`.

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="css,result" data-user="maniczirconium" data-slug-hash="xxVjaYE" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Descendant Combinator">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/xxVjaYE">
  Descendant Combinator</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### Child Selector
Kagaya naman ng descendant selector ang child selector. Ise-select din nito ang element na nasa loob ng isa pang element. Pero hindi ito magse-select ng element na nasa loob din ng element na iyon. Halimbawa, sa HTML na ito, mayroon tayong `<ul>` sa loob ng isang `<li>`:

```html
<ol>
  <li>List Subitem 1</li>
  <li>
    List Item 2
    <ul>
      <li>List Subitem 1</li>
      <li>List Subitem 2</li>
      <li>List Subitem 3</li>
    </ul>
  </li>
  <li>List Subitem 3</li>
</ol>
```

Gamit ang descendant selector, malalagyan natin ng border ang lahat ng `li` na nasa loob ng `ol`:

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="css,result" data-user="maniczirconium" data-slug-hash="yLOjxRB" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Child Combinator">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/yLOjxRB">
  Child Combinator</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Pero gamit ang child selector, ang unang mga `li` lang ang magkakaroon ng borders. Hindi maapektuhan ang mga `li` sa loob nila:

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="css,result" data-user="maniczirconium" data-slug-hash="wvGjEjY" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Child Combinator">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/wvGjEjY">
  Child Combinator</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### General Sibling Combinator
Sine-select ng general sibling combinator ang mga <q>kapatid</q> ng isang element, o ang mga element na nasa kaparehong lebel nito. Halimbawa, sa isang `<ul>`, <q>magkakapatid</q> ang mga `<li>` sa loob nito dahil nasa iisang lebel lang sila. Sa susunod na HTML example, may class na `red-text` ang ikalawang `li`.

```html
<ul>
  <li>List item 1</li>
  <li class="red-text">List item 2</li>
  <li>List item 3</li>
  <li>List item 4</li>
  <li>List item 5</li>
</ul>
```

Sa CSS na ito, gagamitin natin ang general sibling combinator para gawing kulay red ang `.red-text`, at green naman ang lahat ng kapatid na `li` nito na kasunod niya. Pansinin na dahil nauna sa structure ng DOM ang `List item 1`, hindi ito kasali sa mase-select ng general sibling combinator.

<p class="codepen" data-height="350" data-theme-id="light" data-default-tab="html,result" data-user="maniczirconium" data-slug-hash="gOrzdZj" style="height: 350px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="gOrzdZj">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/gOrzdZj">
  gOrzdZj</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### Adjacent Sibling Selector

Gaya ng general sibling selector, nagse-select din ng mga kapatid na element ang adjacent sibling combinator. Pero ang sine-select lang nito ay ang element na *adjacent* dito, ang unang katabi nito. Kunin natin ang nakaraang example natin, pero this time, gamitin natin ang adjacent sibling combinator:

```html
<ul>
  <li>List item 1</li>
  <li class="red-text">List item 2</li>
  <li>List item 3</li>
  <li>List item 4</li>
  <li>List item 5</li>
</ul>
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="maniczirconium" data-slug-hash="bGpMxyJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Adjacent Sibling Selector">
  <span>See the Pen <a href="https://codepen.io/maniczirconium/pen/bGpMxyJ">
  Adjacent Sibling Selector</a> by Francis Rubio (<a href="https://codepen.io/maniczirconium">@maniczirconium</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Sa general sibling combinator, naging green ang lahat ng items na kasunod ng `.red-text`, ang `List item 3` hanggang `List item 5`. Pero sa adjacent sibling combinator, `List item 3` na lang ang naging green dahil ito ang unang kasunod ng `.red-text`.

## Summary
Ginagamit natin ang selectors para sabihin sa browser kung sa aling HTML elements lang mag-a-apply ang style rules natin sa CSS. Puwede rin nating i-group ang iba't ibang selectors sa iisang rule kung magkakaparehas lang sila ng styles. Ginagamit naman natin ang combinators para mag-select ng elements depende sa structure nila sa DOM o Document Object Model.
