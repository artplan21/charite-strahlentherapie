#!/usr/bin/env bash

wget --no-host-directories --mirror --convert-links --base http://relaunch-strahlentherapie.charite.juno.artplan.local/ --domains=relaunch-strahlentherapie.charite.juno.artplan.local http://relaunch-strahlentherapie.charite.juno.artplan.local/
for F in $( find . -type f -name "index.*" ) ; do sed -i.bak -e 's|<meta name="robots" content="index,follow,noodp,noydir">|<meta name="robots" content="noindex,nofollow,noodp,noydir">|g;s|<base href="">|<base href="http://artplan21.github.io/charite-microsite-prototype/">|g' "${F}" ; rm -v "${F}.bak" ; done
rm -v "+4930450589001"

