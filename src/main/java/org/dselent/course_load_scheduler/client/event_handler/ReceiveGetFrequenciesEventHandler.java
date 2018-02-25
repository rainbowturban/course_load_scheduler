package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveGetFrequenciesEvent;
import com.google.gwt.event.shared.EventHandler;

public interface ReceiveGetFrequenciesEventHandler extends EventHandler {
	public void onReceiveGetFrequencies(ReceiveGetFrequenciesEvent evt);
}
