package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendUpdateStatusRequestEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendUpdateStatusRequestEventHandler extends EventHandler {
	public void onSendUpdateStatusRequest(SendUpdateStatusRequestEvent evt);
}
