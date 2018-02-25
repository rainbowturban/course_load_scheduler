package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendRemoveRequestEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendRemoveRequestEventHandler extends EventHandler {
	public void onSendRemoveRequest(SendRemoveRequestEvent evt);
}
