#!/bin/bash -xv
NAVITEM="micrometere"
NAME="Micrometre"
DATE="`date +%d`-`date +%m`-`date +%y`"
COMPANY_NAME="pages."
COMPANY_LOGO=images/elmbridge.png
COMPANY_THUMBNAIL=/public/images/elmbridge.png
PHONE_NUMBER="01932 253753"
MOBILE_PHONE_NUMBER="07763472408"
MOBILE_PHONE_NUMBER="07763472408"
EMAIL_ADDRESS="info@elmbridgepainting.com"
TWITTER="https://twitter.com/elmbridgepaint1"
FACEBOOK="https://www.facebook.com/profile.php?id=100070020624202"
INTAGRAM=""
GOOGLE=""
YOUTUBE=""


#define the template.
cat  << EOF
---
navItem: '$NAVITEM'
title: '$COMPANY_NAME'
metaTitle: '$COMPANY_NAME'
logoImage:   '$COMPANY_LOGO'
socialImage: images/22-09-2021.jpg
date: '$DATE'
tags:
  - nextjs
---


####  $PHONE_NUMBER
####  $MOBILE_PHONE_NUMBER
####  $MOBILE_PHONE_NUMBER
####  $EMAIL_ADDRESS
####  $TWITTER
$COMPANY_NAME

EOF
