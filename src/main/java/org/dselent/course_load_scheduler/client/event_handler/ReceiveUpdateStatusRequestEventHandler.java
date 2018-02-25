package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveUpdateStatusRequestEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveUpdateStatusRequestEventHandler extends EventHandler{
	public void onReceiveUpdateStatusRequest(ReceiveUpdateStatusRequestEvent evt);
}