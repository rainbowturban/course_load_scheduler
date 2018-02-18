package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.LoadHomePageEvent;

import com.google.gwt.event.shared.EventHandler;

public interface LoadHomePageEventHandler extends EventHandler{
	public void onLoadHomePage(LoadHomePageEvent evt);

}
