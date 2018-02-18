package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.LoadLoginPageEvent;

import com.google.gwt.event.shared.EventHandler;

public interface LoadLoginPageEventHandler extends EventHandler{
	public void onLoadLoginPage(LoadLoginPageEvent evt);
}
