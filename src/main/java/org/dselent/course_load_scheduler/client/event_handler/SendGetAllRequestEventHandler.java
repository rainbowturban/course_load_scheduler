package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendGetAllRequestEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendGetAllRequestEventHandler extends EventHandler {
	public void onSendGetAllRequest(SendGetAllRequestEvent evt);

}
