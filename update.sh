#!/usr/bin/env bash

#wget --no-host-directories --mirror --convert-links --base http://migration-strahlentherapie.charite.juno.artplan.local/ --domains=migration-strahlentherapie.charite.juno.artplan.local http://migration-strahlentherapie.charite.juno.artplan.local/
wget --no-host-directories --mirror --base http://migration-strahlentherapie.charite.juno.artplan.local/ --domains=migration-strahlentherapie.charite.juno.artplan.local http://migration-strahlentherapie.charite.juno.artplan.local/
for F in $( find . -type f -name "index.*" ) ; do sed -i.bak -e 's|_processed_|processed|g;s|<meta name="robots" content="index,follow,noodp,noydir">|<meta name="robots" content="noindex,nofollow,noodp,noydir">|g;s|<base href="">|<base href="http://artplan21.github.io/charite-strahlentherapie/">|g;s|<base href="http://migration-strahlentherapie.charite.juno.artplan.local/">|<base href="http://artplan21.github.io/charite-strahlentherapie/">|g;s|https?://migration-strahlentherapie.charite.juno.artplan.local|http://artplan21.github.io/charite-strahlentherapie|g;s|href="/#|href="#|g;s|href="/|href="http://artplan21.github.io/charite-strahlentherapie/|g;s|?14........||g' "${F}" ; rm -v "${F}.bak" ; done
for F in $( find . -type f -name "*?" | grep -E "\?[0-9]+$" ) ; do cp -v "${F}" "$(echo $F | sed -e 's|?.*$||g' )" ; done
rm -v "+4930450589001"

