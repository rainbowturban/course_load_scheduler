package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendCreateAccountEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendCreateAccountEventHandler extends EventHandler
{
	public void onCreateAccount(SendCreateAccountEvent evt);
}
