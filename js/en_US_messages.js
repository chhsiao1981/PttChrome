exports.en_US = {
  "appName": {
    "message": "PttChrome",
    "description": "The title of the application, displayed in the web store."
  },
  "appDesc": {
    "message": "A GNU/GPL telnet client extension specifically designed for BBS browsing.",
    "description":"The description of the application, displayed in the web store."
  },

  // side menus
  "menu_coloredCopy": {
    "message": "Copy with ANSI color"
  },
  "menu_goToOtherSite": {
    "message": "Other site"
  },
  "menu_paste": {
    "message": "Paste"
  },
  "menu_selectAll": {
    "message": "Select all"
  },
  "menu_mouseBrowsing": {
    "message": "Mouse"
  },
  "menu_settings": {
    "message": "Settings"
  },

  // context menus
  "cmenu_copy": {
    "message": "Copy"
  },
  "cmenu_copyAnsi": {
    "message": "Copy with ANSI colors"
  },
  "cmenu_paste": {
    "message": "Paste"
  },
  "cmenu_selectAll": {
    "message": "Select all"
  },
  "cmenu_searchGoogle": {
    "message": "Search Google for"
  },
  "cmenu_quickSearch": {
    "message": "Quick Search"
  },
  "cmenu_openUrlNewTab": {
    "message": "Open link in new tab"
  },
  "cmenu_copyLinkUrl": {
    "message": "Copy link address"
  },
  "cmenu_mouseBrowsing": {
    "message": "Mouse browsing"
  },
  "cmenu_goToOtherSite": {
    "message": "Go to other site ..."
  },
  "cmenu_showInputHelper": {
    "message": "Input helper ..."
  },
  "cmenu_showLiveArticleHelper": {
    "message": "Live article helper ..."
  },
  "cmenu_settings": {
    "message": "Settings"
  },
  "cmenu_restartInTab": {
    "message": "Restart PttChrome in a new tab"
  },

  // options nav
  "options_general": {
    "message": "General"
  },
  "options_extensions": {
    "message": "Extensions"
  },
  "options_about": {
    "message": "About"
  },

  // options
  "options_openInPackagedApp": {
    "message": "Launch PttChrome in packaged app."
  },
  "options_enablePicPreview": {
    "message": "Enable preview when hover on image URLs."
  },
  "options_enableNotifications": {
    "message": "Enable notifications when a message is received."
  },
  "options_enableEasyReading": {
    "message": "Enable easy reading article view."
  },
  "options_endTurnsOnLiveUpdate": {
    "message": "Press END turns on pushthread live update."
  },
  "options_copyOnSelect": {
    "message": "Copy text when selected."
  },
  "options_enableDeleteDupLogin": {
    "message": "When asked to disconnect other logged-in connections, answer:"
  },
  "options_preferences": {
    "message": "Preferences"
  },
  "options_antiIdleTime": {
    "message": "Anti-idle interval (sec)"
  },
  "options_lineWrap": {
    "message": "Wrap line for pasting text longer than"
  },
  "options_reset": {
    "message": "Restore defaults"
  },
  "options_appearance": {
    "message": "Appearance"
  },
  "options_bbsMargin": {
    "message": "Margins around BBS view (px)"
  },
  "options_fontFitWindowWidth": {
    "message": "Stretch font to fill the view"
  },
  "options_fontFace": {
    "message": "Font face"
  },
  "options_mouse": {
    "message": "Mouse"
  },
  "options_mouseBrowsing": {
    "message": "Mouse browsing"
  },
  "options_useMouseBrowsing": {
    "message": "Mouse browsing on start"
  },
  "options_mouseBrowsingHighlight": {
    "message": "Mouse browsing highlight effect"
  },
  "options_highlightColor": {
    "message": "Color"
  },
  "options_mouseLeftFunction": {
    "message": "Mouse left button"
  },
  "options_mouseMiddleFunction": {
    "message": "Mouse middle button"
  },
  "options_mouseWheelFunction1": {
    "message": "Mouse wheel"
  },
  "options_mouseWheelFunction2": {
    "message": "Right mouse key + mouse wheel"
  },
  "options_mouseWheelFunction3": {
    "message": "Left mouse key + mouse wheel"
  },
  "options_none": {
    "message": "No action"
  },
  "options_doPaste": {
    "message": "Perform 'Paste'"
  },
  "options_leftKey": {
    "message": "Sends LEFT key"
  },
  "options_rightKey": {
    "message": "Sends RIGHT key"
  },
  "options_enterKey": {
    "message": "Sends ENTER key"
  },
  "options_upDown": {
    "message": "Controls up / down"
  },
  "options_pageUpDown": {
    "message": "Controls pageup / pagedown"
  },
  "options_threadLastNext": {
    "message": "Controls thread previous / next"
  },

  // extensions
  "ext_quickSearch": {
    "message": "Quick Search"
  },
  "ext_addQuickSearchNamePlaceholder": {
    "message": "Add search engine"
  },
  "ext_addQuickSearchQueryPlaceholder": {
    "message": "URL with %s in place of query"
  },

  // about page
  "about_appName_subtitle": {
    "message": "An open source BBS client"
  },
  "about_description": {
    "message": "Originally written by #link_github_iamchucky#. This is a modified version by #link_github_robertabcd#. It supports connecting over Websocket, and works on most browsers.",
  },
  "about_version_title": {
    "message": "Version"
  },
  "about_version_current": {
    "message": "This version: #link_robertabcd_PttChrome#, #link_GPL20#."
  },
  "about_version_original": {
    "message": "Original version: webapp12 6/2/2015, #link_iamchucky_PttChrome#, #link_GPL20#."
  },
  "about_new_title": {
    "message": "What's new"
  },
  "about_new_content": {
    "message": [
      'Allow setting keepAlive from url, append ?keepAlive=[SECONDS] to the URL',
      'Added SSH connection to PTT, append ?ssh=true to the URL',
      'Limited easy reading mode to ptt.cc only',
      'Added features to load/backup blacklist with Google Drive',
      'Suggest to try port 443 when disconnected',
      'Settings to answer duplicated connection query in autologin settings',
      'Added Live Article Helper in context menu to auto refresh pushthread, or use Alt + r',
      'Switching easy reading mode in settings no longer require a restart',
      'Disabled hammerjs that caused mouse related issue on old Chrome verisons',
      'Fixing bug with spacebar when in chinese input mode and easy reading mode',
      'Fixing ssh connection problem with kex',
      'Added option to ask before closing',
      'Added setting to send right arrow key to left mouse button',
      'Added option to turn on live update with END',
      'Middle mouse button click has new option to do paste',
      'Added option to enable copy on select',
      'Added Quick Search in settings and context menu (thanks to abccbaandy)'
    ]
  },

  // alerts
  "alert_developerModeHeader": {
    "message": "Developer Mode"
  },
  "alert_developerModeText": {
    "message": "You are using developer mode. Things may break in this version of PttChrome. Use this at your own risk."
  },
  "alert_developerModeDismiss": {
    "message": "Yes, I understand."
  },

  "alert_connectionHeader": {
    "message": "You are disconnected!"
  },
  "alert_connectionText": {
    "message": "Would you like to reconnect to the site?"
  },
  "alert_connectionReconnect": {
    "message": "Reconnect (ENTER)"
  },

  "alert_pasteShortcutHeader": {
    "message": "Paste"
  },
  "alert_pasteShortcutText": {
    "message": "Please use Shift+Insert to paste"
  },
  "alert_pasteShortcutClose": {
    "message": "OK"
  },

  // notifications
  "notification_said": {
    "message": "says:"
  },

  "input_sitePlaceholder": {
    "message": "input URL here and then press ENTER"
  },

  // input helper
  "inputHelperTitle": {
    "message": "Input helper"
  },
  "colorTitle": {
    "message": "Color"
  },
  "colorHelperSend": {
    "message": "Send ANSI color code"
  },
  "colorHelperSendMenuFore": {
    "message": "Send foreground only"
  },
  "colorHelperSendMenuBack": {
    "message": "Send background only"
  },
  "colorHelperSendMenuReset": {
    "message": "Send reset code"
  },
  "colorHelperBlink": {
    "message": "Blink"
  },
  "colorHelperPreview": {
    "message": "▅ PREVIEW ▅"
  },
  "colorHelperTooltip1": {
    "message": "Left click: foreground color"
  },
  "colorHelperTooltip2": {
    "message": "Right click: background color, upper row only"
  },

  // symbols
  "symTitle": {
    "message": "Symbols"
  },
  "symTitle_general": {
    "message": "General"
  },
  "symTitle_lineBorders": {
    "message": "Line borders"
  },
  "symTitle_blocks": {
    "message": "Blocks"
  },
  "symTitle_lines": {
    "message": "Lines"
  },
  "symTitle_special": {
    "message": "Special"
  },
  "symTitle_brackets": {
    "message": "Brackets"
  },
  "symTitle_greek": {
    "message": "Greek"
  },
  "symTitle_phonetic": {
    "message": "Phonetic"
  },
  "symTitle_math": {
    "message": "Math"
  },
  "symTitle_hiragana": {
    "message": "Hiragana"
  },
  "symTitle_katakana": {
    "message": "Katakana"
  },

  // emoticons
  "emoTitle": {
    "message": "Emoticons"
  },
  "emoTitle_angry": {
    "message": "Angry"
  },
  "emoTitle_meh": {
    "message": "Meh"
  },
  "emoTitle_sweat": {
    "message": "Sweat & awkward"
  },
  "emoTitle_happy": {
    "message": "Happy"
  },
  "emoTitle_other": {
    "message": "Others"
  },

  // live helper
  "liveHelperEnable": {
    "message": "Enable"
  },
  "liveHelperSpan": {
    "message": "pushthread refreshes every"
  },
  "liveHelperSpanSec": {
    "message": "sec"
  },

  // tooltips
  "tooltip_antiIdleTime": {
    "message": "Input 0 to disable this feature."
  },
  "tooltip_fontFace": {
    "message": "Separate each font with a comma, start with the desired font and end with a generic font."
  }

};
