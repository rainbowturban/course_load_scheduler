package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveGetFrequenciesAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveGetFrequenciesEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class ReceiveGetFrequenciesEvent extends GwtEvent<ReceiveGetFrequenciesEventHandler>{
	public static Type<ReceiveGetFrequenciesEventHandler> TYPE = new Type<ReceiveGetFrequenciesEventHandler>();
	
	private ReceiveGetFrequenciesAction action;
	
	public ReceiveGetFrequenciesEvent(ReceiveGetFrequenciesAction action)
	{
		this.action = action;
	}
	
	public ReceiveGetFrequenciesAction getAction()
	{
		return action;
	}
	
	
	@Override
	public Type<ReceiveGetFrequenciesEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveGetFrequenciesEventHandler handler)
	{
		handler.onReceiveGetFrequencies(this);
	}

}
