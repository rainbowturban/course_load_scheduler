package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SubmitRemoveCourseAction;
import org.dselent.course_load_scheduler.client.event_handler.SubmitRemoveCourseEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SubmitRemoveCourseEvent extends GwtEvent<SubmitRemoveCourseEventHandler>{
	public static Type<SubmitRemoveCourseEventHandler> TYPE = new Type<SubmitRemoveCourseEventHandler>();
	
	private SubmitRemoveCourseAction action;
	
	public SubmitRemoveCourseEvent(SubmitRemoveCourseAction action)
	{
		this.action = action;
	}
	
	public SubmitRemoveCourseAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<SubmitRemoveCourseEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(SubmitRemoveCourseEventHandler handler)
	{
		handler.onSubmitRemoveCourse(this);
	}

}
