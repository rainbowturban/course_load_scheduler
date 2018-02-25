package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveRemoveRequestEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveRemoveRequestEventHandler extends EventHandler{
	public void onReceiveRemoveOwnRequest(ReceiveRemoveRequestEvent evt);
}
