package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.LoadCreateAccountEvent;

import com.google.gwt.event.shared.EventHandler;

public interface LoadCreateAccountEventHandler extends EventHandler{
	public void onLoadCreateAccount(LoadCreateAccountEvent evt);
}
