package org.dselent.course_load_scheduler.client.utils;

import com.google.gwt.safehtml.shared.SafeHtmlUtils;
import com.google.gwt.user.client.ui.HTML;

public final class HTMLCleanser
{
	
	/**
	 * Escapes HTML text from the given HTML
	 * @param html The HTML text to escape
	 * @return An HTML escaped string
	 */
	public static String escapeHtml(HTML html)
	{
		return SafeHtmlUtils.htmlEscape(html.getHTML());
	}
	
	/**
	 * Escapes HTML text from the given string
	 * @param message The String to escape
	 * @return An HTML escaped string
	 */
	public static String escapeHtml(String message)
	{
		return SafeHtmlUtils.htmlEscape(message);
	}
	
	public static String stripHTML(String text)
	{
	  HTML html = new HTML(text);
	  return html.getText();
	}
}