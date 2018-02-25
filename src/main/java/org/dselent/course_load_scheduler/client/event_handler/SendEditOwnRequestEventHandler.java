package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendEditOwnRequestEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendEditOwnRequestEventHandler extends EventHandler {
	public void onSendEditOwnRequest(SendEditOwnRequestEvent evt);
}
