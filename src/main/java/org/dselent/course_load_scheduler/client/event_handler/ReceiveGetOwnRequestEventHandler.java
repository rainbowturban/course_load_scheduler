package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveGetOwnRequestEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveGetOwnRequestEventHandler extends EventHandler{
		public void onReceiveGetOwnRequest(ReceiveGetOwnRequestEvent evt);
	}


