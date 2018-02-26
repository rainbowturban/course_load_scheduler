package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendGetAllAccountEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendGetAllAccountEventHandler extends EventHandler {
	public void onSendGetAllAccount(SendGetAllAccountEvent evt);
}
