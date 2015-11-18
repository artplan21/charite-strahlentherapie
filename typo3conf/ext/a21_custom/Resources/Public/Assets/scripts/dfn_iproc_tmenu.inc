<?php
/***************************************************************
*  Copyright notice
*
*  (c) 1999-2004 Kasper Skaarhoj (kasper@typo3.com)
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*  A copy is found in the textfile GPL.txt and important notices to the license
*  from the author is found in LICENSE.txt distributed with these scripts.
*
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/

/**
 * Adds <dfn> tag support to TMENU
 *
 * @author	Jan Wischnat for gov.typo3.com <jan@wischnat.de>
 */

function user_IProc_dfn($I,$conf)	{

	$itemRow = $conf['parentObj']->menuArr[$I['key']];
	$level = $conf['parentObj']->menuNumber;

	switch ($level) {
		case 1:
			$dfn = ($I['key']+1);
			$GLOBALS['TSFE']->register['dfn_lev1'] = $dfn;
			break;

		case 2:
			$dfn = $GLOBALS['TSFE']->register['dfn_lev1'].".".($I['key']+1);
			$GLOBALS['TSFE']->register['dfn_lev2'] = $dfn;
			break;			

		case 3:
			$dfn = $GLOBALS['TSFE']->register['dfn_lev2'].".".($I['key']+1);
			$GLOBALS['TSFE']->register['dfn_lev3'] = $dfn;
			break;	

		case 4:
			$dfn = $GLOBALS['TSFE']->register['dfn_lev3'].".".($I['key']+1);
			$GLOBALS['TSFE']->register['dfn_lev4'] = $dfn;
			break;	
			
		case 5:
			$dfn = $GLOBALS['TSFE']->register['dfn_lev4'].".".($I['key']+1);
			$GLOBALS['TSFE']->register['dfn_lev5'] = $dfn;
			break;
			
		case 6:
			$dfn = $GLOBALS['TSFE']->register['dfn_lev5'].".".($I['key']+1);
			$GLOBALS['TSFE']->register['dfn_lev6'] = $dfn;
			break;
			
		case 7:
			$dfn = $GLOBALS['TSFE']->register['dfn_lev6'].".".($I['key']+1);
			$GLOBALS['TSFE']->register['dfn_lev7'] = $dfn;
			break;	

		default:
			$dfn = $conf['parentObj']->id.$itemRow["uid"].($level)."--.".($I['key']+1).":".count($conf['parentObj']->menuArr);
			break;
	}

	$I['parts']['before'].='<dfn class="menu">'.$dfn.':</dfn>';

	//t3lib_div::debug($conf['parentObj']->alternativeMenuTempArray);
	//echo (count($GLOBALS["TSFE"]->rootLine));
	//echo ($GLOBALS["TSFE"]->rootLine[1]['title']);
	//echo (count($conf['parentObj']->menuArr));
	//t3lib_div::debug($I);
	//t3lib_div::debug($GLOBALS["TSFE"]->rootLine);
	//t3lib_div::debug($GLOBALS['TSFE']->register);

	return $I;
}

?>