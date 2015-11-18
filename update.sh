#!/usr/bin/env bash

#wget --no-host-directories --mirror --convert-links --base http://relaunch-strahlentherapie.charite.juno.artplan.local/ --domains=relaunch-strahlentherapie.charite.juno.artplan.local http://relaunch-strahlentherapie.charite.juno.artplan.local/
wget --no-host-directories --mirror --base http://relaunch-strahlentherapie.charite.juno.artplan.local/ --domains=relaunch-strahlentherapie.charite.juno.artplan.local http://relaunch-strahlentherapie.charite.juno.artplan.local/
for F in $( find . -type f -name "index.*" ) ; do sed -i.bak -e 's|<meta name="robots" content="index,follow,noodp,noydir">|<meta name="robots" content="noindex,nofollow,noodp,noydir">|g;s|<base href="">|<base href="http://artplan21.github.io/charite-strahlentherapie/">|g;s|<base href="http://relaunch-strahlentherapie.charite.juno.artplan.local/">|<base href="http://artplan21.github.io/charite-strahlentherapie/">|g;s|https?://relaunch-strahlentherapie.charite.juno.artplan.local|http://artplan21.github.io/charite-strahlentherapie|g;s|?14........||g' "${F}" ; rm -v "${F}.bak" ; done
for F in $( find . -type f -name "*?" | grep -E "\?[0-9]+$" ) ; do cp -v "${F}" "$(echo $F | sed -e 's|?.*$||g' )" ; done
rm -v "+4930450589001"

