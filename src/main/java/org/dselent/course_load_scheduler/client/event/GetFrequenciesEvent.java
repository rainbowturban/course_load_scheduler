package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.GetFrequenciesAction;
import org.dselent.course_load_scheduler.client.event_handler.GetFrequenciesEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class GetFrequenciesEvent extends GwtEvent<GetFrequenciesEventHandler> {
public static Type<GetFrequenciesEventHandler> TYPE = new Type<GetFrequenciesEventHandler>();
	
	private GetFrequenciesAction action;
	
	public GetFrequenciesEvent(GetFrequenciesAction action)
	{
		this.action = action;
	}
	
	public GetFrequenciesAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<GetFrequenciesEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(GetFrequenciesEventHandler handler)
	{
		handler.onGetFrequencies(this);
	}

}
