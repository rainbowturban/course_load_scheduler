package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendCreateNewRequestEvent;
import com.google.gwt.event.shared.EventHandler;

public interface SendCreateNewRequestEventHandler extends EventHandler{
	public void onSendCreateNewRequest(SendCreateNewRequestEvent evt);
}
