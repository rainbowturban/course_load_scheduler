package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.GetStartTimesAction;
import org.dselent.course_load_scheduler.client.event_handler.GetStartTimesEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class GetStartTimesEvent extends GwtEvent<GetStartTimesEventHandler> {
	public static Type<GetStartTimesEventHandler> TYPE = new Type<GetStartTimesEventHandler>();
	
	private GetStartTimesAction action;
	
	public GetStartTimesEvent(GetStartTimesAction action)
	{
		this.action = action;
	}
	
	public GetStartTimesAction getAction()
	{
		return action;
	}

	@Override
	public Type<GetStartTimesEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(GetStartTimesEventHandler handler) {
		handler.onGetStartTimes(this);
	}

}
