package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveGetAllRequestEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveGetAllRequestEventHandler extends EventHandler {
	public void onReceiveGetAllRequest(ReceiveGetAllRequestEvent evt);
}

