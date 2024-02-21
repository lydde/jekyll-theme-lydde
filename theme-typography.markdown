---
layout: page
title: Theme Typography
hero: false
---
## Headings
<div class="row">
    <div class="col-6">
        <p class="h1">h1. Bootstrap heading</p>
        <p class="h2">h2. Bootstrap heading</p>
        <p class="h3">h3. Bootstrap heading</p>
        <p class="h4">h4. Bootstrap heading</p>
        <p class="h5">h5. Bootstrap heading</p>
        <p class="h6">h6. Bootstrap heading</p>
    </div>
    <div class="col-6">
        <h1 class="display-1">Display 1</h1>
        <h1 class="display-2">Display 2</h1>
        <h1 class="display-3">Display 3</h1>
        <h1 class="display-4">Display 4</h1>
        <h1 class="display-5">Display 5</h1>
        <h1 class="display-6">Display 6</h1>
    </div>
</div>
<h3>
  Fancy display heading
  <small class="text-body-secondary">With faded secondary text</small>
</h3>

## Lead
<p class="lead">
  This is a lead paragraph. It stands out from regular paragraphs.
</p>

## Text
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>



## Unordered and Numbered Lists

* List item one
    * List item one
        * List item one
        * List item two
        * List item three
        * List item four
    * List item two
    * List item three
    * List item four
* List item two
* List item three
* List item four

1. List item one
    1. List item one
        1. List item one
        2. List item two
        3. List item three
        4. List item four
    2. List item two
    3. List item three
    4. List item four
2. List item two
3. List item three
4. List item four

## Definition List
term
: definition
: another definition

another term
and another term
: and a definition for the term

## Links
Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Morbi egestas elementum ligula](http://yaka.games), vel accumsan nulla hendrerit a.

### Links with title
Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Morbi egestas elementum ligula](http://yaka.games "Duis viverra at ante pharetra lacinia"), vel accumsan nulla hendrerit a. 

### Links with references
[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

## Images
### Images with title
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

### Images with Reference
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

## Code and Syntax Highlighting
### Common

Inline `code` has `back-ticks around` it.

```
No language indicated, so no syntax highlighting.
```
### Specific Language
```ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
```

{% highlight js %}
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments and returns the sum of those arguments
var adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// > 8
{% endhighlight %}

### Specific filename

```sass
@import
  "colors/light-typography",
  "colors/dark-typography";
```
{: file='_sass/jekyll-theme-chirpy.scss'}

## Tables

| A simple | table |
| with multiple | lines|

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|----
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=====
| Foot1   | Foot2   | Foot3

## Blockquotes
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas elementum ligula, vel accumsan nulla hendrerit a. Duis viverra at ante pharetra lacinia. Maecenas feugiat arcu felis, id ultricies dolor vehicula eget. Cras quis felis urna. Suspendisse id vestibulum orci. Nulla facilisi. Fusce convallis ut turpis bibendum eleifend.

> Lorem ipsum dolor sit amet, consectetur adipiscing elit.

> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
{: title="Blockquote title"}

Multi line blockquote with a cite reference:

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas elementum ligula, vel accumsan nulla hendrerit a. Duis viverra at ante pharetra lacinia. Maecenas feugiat arcu felis, id ultricies dolor vehicula eget. Cras quis felis urna. Suspendisse id vestibulum orci. Nulla facilisi. Fusce convallis ut turpis bibendum eleifend.

<figure>
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>

## Footnotes

This is a text with a footnote[^1].

[^1]: And here is the definition.


## Abbreviations
This is an HTML example.

*[HTML]: Hyper Text Markup Language

## Horizontal Rule
Three or more...

---