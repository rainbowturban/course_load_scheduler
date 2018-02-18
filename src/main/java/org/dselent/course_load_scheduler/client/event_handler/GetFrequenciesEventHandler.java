package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.GetFrequenciesEvent;

import com.google.gwt.event.shared.EventHandler;

public interface GetFrequenciesEventHandler extends EventHandler{
	public void onGetFrequencies(GetFrequenciesEvent evt);
}
