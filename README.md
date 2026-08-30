# the.inner-circle.fyi

this is the git repo for the [inner-circle.fyi](https://inner-circle.fyi) domain.

this uses some weird hacky stuff stolen from [ijsbol/abigail.sh](https://github.com/ijsbol/abigail.sh).

## joining the webring

to inner circle members:

1. fork this repository
2. edit [`src/ticfyi/webring.py`](src/ticfyi/webring.py)'s `WEB_RING_MEMBERS` to include your domain.
3. upload your 88x31px button (if applicable) to [`src/ticfyi/images/member-buttons`](src/ticfyi/images/member-buttons) as a `.png`
4. create a pull request on this repository asking to be added to the webring
5. add the following html snippet to your website where you would like the webring to appear on your website

```html
<div id="innerCircleWebRing"></div>
<script src="https://the.inner-circle.fyi/ring/ring.js"></script>
<script>loadWebRing("your.domain.com");</script>
```

6. done!