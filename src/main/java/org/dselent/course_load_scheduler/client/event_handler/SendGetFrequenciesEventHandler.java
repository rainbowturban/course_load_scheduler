package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendGetFrequenciesEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendGetFrequenciesEventHandler extends EventHandler{
	public void onSendGetFrequencies(SendGetFrequenciesEvent evt);
}
