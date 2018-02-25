package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendGetOwnRequestEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendGetOwnRequestEventHandler extends EventHandler {
	public void onSendGetOwnRequest(SendGetOwnRequestEvent evt);
}
